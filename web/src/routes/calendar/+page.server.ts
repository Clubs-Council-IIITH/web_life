import type { PageServerLoad } from './$types';
import { getClient } from '$lib/gql/client';
import { GET_ALL_EVENTS } from '$lib/gql/queries/events';

export const load: PageServerLoad = async () => {
	const { data: { events } = {} } = await getClient().query(GET_ALL_EVENTS, {
		clubid: null,
		public: true,
		limit: null,
	});

	return {
		page_server_data: {
			events: events
		}
	};
};
