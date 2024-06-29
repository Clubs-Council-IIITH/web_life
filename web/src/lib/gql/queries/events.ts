import gql from 'graphql-tag';

export const GET_RECENT_EVENTS = gql`
	query RecentEvents {
		recentEvents {
			_id
			name
			code
			clubid
			datetimeperiod
			poster
		}
	}
`;

export const GET_ALL_EVENTS = gql`
	query Events($clubid: String, $public: Boolean, $limit: Int) {
		events(clubid: $clubid, public: $public, limit: $limit) {
			_id
			name
			code
			clubid
			datetimeperiod
			status {
				state
			}
			location
			poster
		}
	}
`;
