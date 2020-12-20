import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { GET_LAMPS, LAMP_SUB } from 'Utils/queries/lamps';
import { GET_DOORSANDWINDOWS } from 'Utils/queries/doorsAndWindows';
import { Box, BoxHeader, BoxContent, PageContainer } from 'Theme/Components';

const DashGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
	grid-gap: 15px;

	@media screen and (max-width: 1300px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const containerVariants = {
	before: {},
	after: {
		transition: { staggerChildren: 0.05 },
	},
};

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

const DoorsAndWindowsBox = () => {
	const { loading, error, data } = useQuery(GET_DOORSANDWINDOWS);

	if (loading) return null;
	if (error) return null;

	const openedDoorsAndwindows = data.doors
		.filter((door) => door.state)
		.concat(data.windows.filter((window) => window.state));

	if (openedDoorsAndwindows.length == 0) return null;

	return (
		<Box variant="warning" variants={boxVariants}>
			<BoxHeader>Opened doors and windows</BoxHeader>
			<BoxContent>
				{openedDoorsAndwindows.map((i) => (
					<div key={i.id}>{i.name}</div>
				))}
			</BoxContent>
		</Box>
	);
};

const LampBox = () => {
	const { loading, error, data, refetch, subscribeToMore } = useQuery(GET_LAMPS);

	useEffect(() => {
		refetch();
		subscribeToMore({
			document: LAMP_SUB,
		});
	}, [refetch, subscribeToMore]);

	if (loading) return null;
	if (error) return null;

	const litLamps = data.lamps.filter((lamp) => lamp.state == 'on');

	if (litLamps.length == 0) return null;

	return (
		<Box variant="warning" variants={boxVariants}>
			<BoxHeader>Lit lamps</BoxHeader>
			<BoxContent>
				{litLamps.map((lamp) => (
					<div key={lamp.id}>
						{lamp.name} - {lamp.room.name}
					</div>
				))}
			</BoxContent>
		</Box>
	);
};

const TimeBox = styled.div`
	font-size: xx-large;
`;

const DateAndTimeBox = () => {
	const [today, setDate] = useState(new Date());
	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Box variant="success" variants={boxVariants}>
			<BoxHeader>{format(today, 'EEEE, dd MMMM')}</BoxHeader>
			<BoxContent>
				<TimeBox>{format(today, 'HH:mm:ss')} </TimeBox>
			</BoxContent>
		</Box>
	);
};

const Dashboard = () => {
	return (
		<PageContainer variants={containerVariants} initial="before" animate="after">
			<DashGrid>
				<DateAndTimeBox />
				<LampBox />
				<DoorsAndWindowsBox />
			</DashGrid>
		</PageContainer>
	);
};

export default Dashboard;
