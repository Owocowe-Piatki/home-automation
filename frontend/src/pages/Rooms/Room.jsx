import PropTypes from 'prop-types';
import { Box, BoxHeader, BoxContent } from 'Theme/Components';
import Lamp from 'Pages/Lamps/Lamp';
import Roller from 'Pages/Rollers/Roller';
import Socket from 'Pages/Sockets/Socket';
import DoorOrWindow from 'Pages/DoorsAndWindows/DoorAndWindow';

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

const Room = ({ room }) => {
	return (
		<Box variants={boxVariants}>
			<BoxHeader>{room.name}</BoxHeader>

			<BoxContent>
				{room.appliances.map((appliance) => {
					if (appliance.__typename == 'Lamp')
						return <Lamp lamp={appliance} key={appliance.id} />;

					if (appliance.__typename == 'Roller')
						return <Roller roller={appliance} key={appliance.id} />;

					if (appliance.__typename == 'Socket')
						return <Socket socket={appliance} key={appliance.id} />;

					if (['Door', 'Window'].indexOf(appliance.__typename) >= 0)
						return <DoorOrWindow doorOrWindow={appliance} key={appliance.id} />;
				})}
			</BoxContent>
		</Box>
	);
};

Room.propTypes = {
	room: PropTypes.object,
};

export default Room;
