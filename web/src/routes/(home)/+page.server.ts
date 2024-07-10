import type { PageServerLoad } from './$types';
import { getClient } from '$lib/gql/client';
import { GET_ALL_EVENTS } from '$lib/gql/queries/events';
import { GET_ACTIVE_CLUBS, GET_CLUB } from '$lib/gql/queries/clubs';

let FILESERVER_URL = 'https://clubs.iiit.ac.in';

function getStaticFile(filepath: string, filetype="image") {
	return `${FILESERVER_URL}/files/static?filename=${filepath}&filetype=${filetype}`;
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

function convertTZ(date: Date | string, tzString: string = 	"Asia/Kolkata") {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}


export const load: PageServerLoad = async () => {
	const { data: { activeClubs } = {} } = await getClient().query(GET_ACTIVE_CLUBS, {});
	const cc = {
		cid: 'clubs',
		name: 'Clubs Council (Umbrella Body of Clubs)',
		logo: getStaticFile('cc-logo.png'),
		banner: getStaticFile('cc-banner.png'),
		tagline: "Let's make college life fun!",
		studentBody: true,
		category: 'other',
		redirectURL: 'https://clubs.iiit.ac.in/'
	};

	let allClubs: any[] = [];
	for (let i = 0; i < activeClubs.length; i++) {
		let logo = activeClubs[i].logo;
		activeClubs[i].logo = getFile(logo);
		allClubs = [...allClubs, activeClubs[i]];
	}
	allClubs = [cc, ...allClubs];

	const { data: { events } = {} } = await getClient().query(GET_ALL_EVENTS, {
		clubid: null,
		public: true,
		limit: 4,
	});

	let recent_events = events;
	for (let i = 0; i < recent_events.length; i++) {
		for (let j = 0; j < allClubs.length; j++) {
			if (allClubs[j].cid == recent_events[i].clubid) {
				recent_events[i]['club_logo'] = allClubs[j].logo
				recent_events[i]['club_name'] = allClubs[j].name
			}
		}
		//date string
		let isoDateString = recent_events[i].datetimeperiod[0];
		let date = convertTZ(isoDateString);

		const monthNames = [
			"January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		];
		let month = monthNames[date.getMonth()];
		let day = date.getDate();
		let year = date.getFullYear();
		let formattedDate = `${month} ${day}, ${year}`;
		recent_events[i]['date'] = formattedDate;

		if (recent_events[i].poster) {
			recent_events[i].image = getFile(recent_events[i].poster)
		}
		else {
			recent_events[i].image = recent_events[i].club_logo
		}
	}

	return {
		page_server_data: {
			events: recent_events
		}
	};
};
