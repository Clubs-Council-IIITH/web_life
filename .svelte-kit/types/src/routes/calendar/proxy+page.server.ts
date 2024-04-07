// @ts-nocheck
import type { PageServerLoad } from './$types';
import { getClient } from '$lib/gql/client';
import { GET_ALL_EVENTS } from '$lib/gql/queries/events';
import stc from 'string-to-color';

let staticUrl = 'https://clubs.iiit.ac.in/static';
let FILESERVER_URL = 'https://clubs.iiit.ac.in';

function eventDataTransform(event: any) {
	if (event.status.state === 'approved') {
		return {
			id: event._id,
			title: event.name,
			start: new Date(event.datetimeperiod[0]),
			end: new Date(event.datetimeperiod[1]),
			backgroundColor: stc(event.clubid),
			url: `/events/${event._id}`,
			display: 'block'
		};
	} 
	else {
		return {
			id: event._id,
			title: event.name,
			start: new Date(event.datetimeperiod[0]),
			end: new Date(event.datetimeperiod[1]),
			backgroundColor: stc(event.clubid),
			display: 'block'
		};
	}
}

export const load = async () => {
	const { data: { events } = {} } = await getClient().query(GET_ALL_EVENTS, {
		clubid: null,
		public: false
	});		
	let final_events = events?.filter((event:any) => event?.status?.state !== "deleted")
	
	return {
		page_server_data: {
			events: final_events
		}
	};
};
;null as any as PageServerLoad;