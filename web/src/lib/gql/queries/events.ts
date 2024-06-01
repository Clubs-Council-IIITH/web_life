import gql from 'graphql-tag';

export const GET_RECENT_EVENTS = gql`
	query RecentEvents {
		recentEvents {
			_id
			name
			code
			clubid
			startTime
			endTime
			poster
		}
	}
`;

export const GET_ALL_EVENTS = gql`
	query Events($clubid: String, $public: Boolean) {
		events(clubid: $clubid, public: $public) {
			_id
			name
			code
			clubid
			startTime
			endTime
			status {
				state
			}
			location
			poster
		}
	}
`;
