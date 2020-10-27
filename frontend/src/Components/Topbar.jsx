import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { RiSettings4Fill } from 'react-icons/ri';

import { SidebarContext } from './Sidebar';
import Hamburger from 'Theme/Components/Hamburger';
import Spacer from 'Theme/Components/Spacer';

const Container = styled.div`
	position: fixed;
	width: 100%;
	height: ${(p) => p.theme.topbar.height};
	top: 0;
	background: ${(p) => p.theme.topbar.background};
	color: ${(p) => p.theme.topbar.text};

	display: flex;
	align-items: center;
`;

const TopbarButton = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;

	text-decoration: none;

	color: ${(p) => p.theme.topbar.text};

	font-size: 15px;

	padding: 0 10px;

	&:hover {
		color: ${(p) => p.theme.topbar.textActive};
	}

	&.active {
		color: ${(p) => p.theme.topbar.textActive};
	}

	& svg {
		font-size: 30px;
		margin: 0 5px;
	}
`;

const Profile = styled(TopbarButton)`
	& svg {
		border-radius: 50%;
		padding: 2px;
		border: 2px solid ${(p) => darken(0.3, p.theme.topbar.text)};
	}
`;

const Settings = styled(TopbarButton)``;

const Topbar = () => {
	const [open, setOpen] = React.useContext(SidebarContext);

	return (
		<Container>
			<Hamburger state={open} onClick={() => setOpen(!open)}>
				<span />
				<span />
				<span />
			</Hamburger>

			<Spacer />

			<Settings to="/settings">
				<RiSettings4Fill />
			</Settings>

			<Profile to="/profile">
				<FaUserAlt />
			</Profile>
		</Container>
	);
};

export default Topbar;
