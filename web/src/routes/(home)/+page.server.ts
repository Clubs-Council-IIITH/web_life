import type { PageServerLoad } from './$types';
import { getClient } from '$lib/gql/client';
import { GET_ALL_EVENTS } from '$lib/gql/queries/events';
import { GET_ACTIVE_CLUBS, GET_CLUB } from '$lib/gql/queries/clubs';

let staticUrl = 'http://clubs.iiit.ac.in/static';
let FILESERVER_URL = 'https://clubs.iiit.ac.in';
function getStaticFile(filepath: string) {
	return `${staticUrl}/${filepath}`;
}

function getFile(filepath: String) {
	if (filepath?.toLowerCase()?.startsWith("http")) {
		// return the full URL if global URL
		return filepath;
	} else if (filepath) {
		// call files service if local URL
		return `${FILESERVER_URL}/files/download?filename=${filepath}`;
	}
}


export const load: PageServerLoad = async () => {
	const { data: { activeClubs } = {} } = await getClient().query(GET_ACTIVE_CLUBS, {});
	const cc = {
		cid: 'clubs',
		name: 'Clubs Council (Umbrella Body of Clubs)',
		logo: getStaticFile('img/cc-logo.png'),
		banner: getStaticFile('img/cc-banner.png'),
		tagline: "Let's make college life fun!",
		studentBody: true,
		category: 'other',
		redirectURL: 'https://clubs.iiit.ac.in/'
	};
	let allClubs: any[] = [];
	for (let i = 0; i < activeClubs.length; i++) {
		let logo = activeClubs[i].logo;
		activeClubs[i].logo = getFile(logo);
		let banner = activeClubs[i].banner;
		activeClubs[i].banner = getFile(banner);

		const { data: { club } = {} } = await getClient().query(GET_CLUB, {
			clubInput: {
				cid: activeClubs[i].cid
			}
		});

		if (club?.socials?.website)
			activeClubs[i].redirectURL = club.socials.website;
		else
			activeClubs[i].redirectURL = `https://clubs.iiit.ac.in/student-bodies/${activeClubs[i].cid}`;

		allClubs = [...allClubs, activeClubs[i]];
		if (activeClubs[i].cid == 'ec') {
			activeClubs[i].banner = 'https://clubs.iiit.ac.in/_next/image?url=https%3A%2F%2Fpicsum.photos%2Fseed%2FRWxlY3Rpb24gQ29tbWlzc2lvbg%3D%3D%2F640%2F480%3Fblur%3D1&w=1920&q=75'
		}
	}
	allClubs = [...allClubs, cc];
	allClubs.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
	const { data: { events } = {} } = await getClient().query(GET_ALL_EVENTS, {
		clubid: null,
		public: true,
		limit: 4,
	});
	let top_five_events = events;
	for (let i = 0; i < top_five_events.length; i++) {
		for (let j = 0; j < allClubs.length; j++) {
			if (allClubs[j].cid == top_five_events[i].clubid) {
				top_five_events[i]['club_logo'] = allClubs[j].logo
				top_five_events[i]['club_name'] = allClubs[j].name
			}
		}
		//date string
		let isoDateString = top_five_events[i].datetimeperiod[0];
		let date = new Date(isoDateString);
		const monthNames = [
			"January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		];
		let month = monthNames[date.getMonth()];
		let day = date.getDate();
		let year = date.getFullYear();
		let formattedDate = `${month} ${day}, ${year}`;
		top_five_events[i]['date'] = formattedDate;

		if (top_five_events[i].poster) {
			top_five_events[i].image = getFile(top_five_events[i].poster)
		}
		else {
			top_five_events[i].image = top_five_events[i].club_logo
		}
	}
	return {
		page_server_data: {
			events: top_five_events
		}
	};
};
