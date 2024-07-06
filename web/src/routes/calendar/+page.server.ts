import type { PageServerLoad } from './$types';
import { getClient } from '$lib/gql/client';
import { GET_ALL_EVENTS } from '$lib/gql/queries/events';
import {GET_CLUB} from '$lib/gql/queries/clubs';
export const load: PageServerLoad = async () => {
	const { data: { events } = {} } = await getClient().query(GET_ALL_EVENTS, {
		clubid: null,
		public: true,
		limit: null,
	});
	let clubdata:any[]=[];
	for(let i=0;i<events.length;i++){
	const { data: { club } = {} } = await getClient().query(GET_CLUB, {
		clubInput: {
			cid: events[i].clubid
		}
	});
	clubdata=[...clubdata,club]
}
	return {
		page_server_data: {
			events: events,
			clubdata:clubdata
		}
	};
};
