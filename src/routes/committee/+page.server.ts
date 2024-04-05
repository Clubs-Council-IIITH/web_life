import type { PageServerLoad } from './$types';
import { getClient } from '$lib/gql/client';
import { GET_USER_PROFILE } from '$lib/gql/queries/users';

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
	const sacMembersFetch = await fetch(getStaticFile('json/sacMembers.json'));
	const slcMembersFetch = await fetch(getStaticFile('json/slcMembers.json'));
	const sloMembersFetch = await fetch(getStaticFile('json/sloMembers.json'));
	
	const sacMembers = await sacMembersFetch.json();
	const slcMembers = await slcMembersFetch.json();
	const sloMembers = await sloMembersFetch.json();

	for (let i = 0; i < sacMembers.length; i++) {
		const uid = sacMembers[i].uid;
		const { data: { userProfile, userMeta } = {} } = await getClient().query(GET_USER_PROFILE, {
			userInput: {
				uid: uid
			}
		});
		const image = getFile(userMeta.img);
		if(image == null){
			sacMembers[i]['imagesrc'] = 'https://avatar.iran.liara.run/public/30';
		}
		else{
			sacMembers[i]['imagesrc'] = image;
		}
		sacMembers[i]['data'] = userProfile;
		sacMembers[i]['firstname'] = userProfile.firstName;
		sacMembers[i]['lastname'] = userProfile.lastName;
		for(let j = 0; j < sacMembers[i].roles.length; j++) {
			if(sacMembers[i].roles[j].endYear == null){
				sacMembers[i].roles[j].endYear = "present";
			}
		}
	}
	for (let i = 0; i < slcMembers.length; i++) {
		const uid = slcMembers[i].uid;
		const { data: { userProfile, userMeta } = {} } = await getClient().query(GET_USER_PROFILE, {
			userInput: {
				uid: uid
			}
		});
		const image = getFile(userMeta.img);
		if(image == null){
			slcMembers[i]['imagesrc'] = 'https://avatar.iran.liara.run/public/30';
		}
		else {
			slcMembers[i]['imagesrc'] = image;
		}
		slcMembers[i]['firstname'] = userProfile.firstName;
		slcMembers[i]['lastname'] = userProfile.lastName;
		for(let j = 0; j < slcMembers[i].roles.length; j++) {
			if(slcMembers[i].roles[j].endYear == null){
				slcMembers[i].roles[j].endYear = "present";
			}
		}
	}
	for (let i = 0; i < sloMembers.length; i++) {
		const uid = sloMembers[i].uid;
		const { data: { userProfile, userMeta } = {} } = await getClient().query(GET_USER_PROFILE, {
			userInput: {
				uid: uid
			}
		});
		const image = getFile(userMeta.img);
		if(image == null){
			sloMembers[i]['imagesrc'] = 'https://avatar.iran.liara.run/public/30';
		}
		else{
			sloMembers[i]['imagesrc'] = image;
		}
		sloMembers[i]['firstname'] = userProfile.firstName;
		sloMembers[i]['lastname'] = userProfile.lastName;
		for(let j = 0; j < sloMembers[i].roles.length; j++) {
			if(sloMembers[i].roles[j].endYear == null){
				sloMembers[i].roles[j].endYear = "present";
			}
		}
	}
	return {
		page_server_data: {
			sac: sacMembers,
			slc: slcMembers,
			slo: sloMembers
		}
	};
};
