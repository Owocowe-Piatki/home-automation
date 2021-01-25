import styled from 'styled-components';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { PageContainer, Loading, Error } from 'Theme/Components';

import { GET_ROOMS_APPLIANCES } from 'Utils/queries/rooms';
import Floor from 'Pages/Rooms/Floor';

const FloorGrid = styled.div`
	display: flex;
	flex-direction: column;
`;

const containerVariants = {
	before: {},
	after: {
		transition: { staggerChildren: 0.05 },
	},
};

const Rooms = () => {
	const { loading: queryLoading, error: queryError, data, refetch } = useQuery(
		GET_ROOMS_APPLIANCES
	);

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (queryLoading) return <Loading />;
	if (queryError) return <Error message={queryError} />;

	const roomsPerFloor = data.rooms.reduce((floors, room) => {
		if (floors && !Object.prototype.hasOwnProperty.call(room, room.floor)) {
			floors[room.floor] = [];
		}
		floors[room.floor].push(room);

		return floors;
	}, {});

	return (
		<PageContainer variants={containerVariants} initial="before" animate="after">
			<FloorGrid>
				{Object.entries(roomsPerFloor).map((value, key) => {
					return <Floor floor={value} key={key} />;
				})}
			</FloorGrid>
		</PageContainer>
	);
};

export default Rooms;
