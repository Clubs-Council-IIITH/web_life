import type { PageServerLoad } from './$types';
import { getClient } from '$lib/gql/client';
import { GET_ACTIVE_CLUBS, GET_CLUB } from '$lib/gql/queries/clubs';

let FILESERVER_URL = 'https://clubs.iiit.ac.in';

function getStaticFile(filepath: string, filetype="image") {
	return `${FILESERVER_URL}/files/static?filename=${filepath}&filetype=${filetype}`;
}

function getFile(filepath: String) {
	if (filepath?.toLowerCase()?.startsWith('http')) {
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
		logo: getStaticFile('cc-logo.png'),
		banner: getStaticFile('cc-banner.png'),
		tagline: "Let's make college life fun!",
		studentBody: true,
		category: 'other',
		redirectURL: 'https://clubs.iiit.ac.in/'
	};
	let allClubs: any[] = [];
	for (let i = 0; i < activeClubs.length; i++) {
		if (activeClubs[i].studentBody == true) {
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
	}

	allClubs = [...allClubs, cc];
	allClubs.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
	return {
		page_server_data: {
			clubs: allClubs
		}
	};
};
