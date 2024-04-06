import type { PageServerLoad } from './$types';
import { getClient } from '$lib/gql/client';
import { GET_USER_PROFILE } from '$lib/gql/queries/users';
import { GET_ACTIVE_CLUBS } from '$lib/gql/queries/clubs';

let staticUrl = 'https://clubs.iiit.ac.in/static';
let FILESERVER_URL = 'https://clubs.iiit.ac.in';
function getStaticFile(filepath: string) {
	return `${staticUrl}/${filepath}`;
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
		name: 'Clubs Council',
		logo: getStaticFile('img/cc-logo.png'),
		banner: getStaticFile('img/cc-banner.png'),
		tagline: "Let's make college life fun!",
		studentBody: true,
		category: 'other'
	};
	let allClubs: any[] = [];
	for(let i = 0; i < activeClubs.length; i++){
		if(activeClubs[i].studentBody == true){
			let logo = activeClubs[i].logo;
			activeClubs[i].logo = getFile(logo);
			let banner = activeClubs[i].banner;
			activeClubs[i].banner = getFile(banner);
			allClubs = [...allClubs, activeClubs[i]];
		}
	}
	allClubs = [...allClubs, cc];
	return {
		page_server_data: {
			clubs: allClubs
		}
	};
};
