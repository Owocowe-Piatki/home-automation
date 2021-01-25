import { gql } from '@apollo/client';

export const GET_ROOMS_APPLIANCES = gql`
	query RoomsAppliances {
		rooms {
			floor
			name
			id

			appliances {
				__typename

				... on Lamp {
					id
					name
				}
				... on Roller {
					id
					name
				}
				... on Socket {
					id
					name
				}
				... on Door {
					id
					name
					state
				}
				... on Window {
					id
					name
					state
				}
			}
		}
	}
`;
