import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, BoxHeader } from 'Theme/Components';

import Room from 'Pages/Rooms/Room';

const boxVariants = {
	before: {
		opacity: 0,
		y: -20,
	},
	after: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
		},
	},
};

const FloorBox = styled(Box)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
	grid-gap: 15px;

	@media screen and (max-width: 1300px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: 1fr;
	}

	border-left: none;
	background-color: transparent;
	padding: 0;
`;

const FloorContainer = styled.div`
	margin: 8px 0;
`;

const FloorTitle = styled(BoxHeader)`
	margin: 8px 0;
`;

const Floor = ({ floor }) => {
	return (
		<FloorContainer>
			<FloorTitle>Floor {floor[0]}</FloorTitle>

			<FloorBox variants={boxVariants}>
				{floor[1].map((room) => {
					return <Room room={room} key={room.id} />;
				})}
			</FloorBox>
		</FloorContainer>
	);
};

Floor.propTypes = {
	floor: PropTypes.object,
};

export default Floor;
