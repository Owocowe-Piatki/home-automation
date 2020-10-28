import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';

import Spacer from 'Theme/Components/Spacer';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	background: ${(p) => p.theme.sidebar.background};

	// Mobile
	@media screen and (max-width: 800px) {
		position: fixed;
		min-width: ${(p) => p.theme.sidebar.wide.width};

		transform: ${(p) => (p.open ? 'translateX(0)' : 'translateX(-100%)')};
		transition: transform 0.3s;
	}

	// Desktop
	@media screen and (min-width: 800px) {
		min-width: ${(p) => (p.open ? p.theme.sidebar.wide.width : p.theme.sidebar.narrow.width)};

		transition: min-width 0.3s; // BAD
		will-change: min-width;
	}
`;

const PageLink = styled(NavLink)`
	display: flex;
	height: ${(p) => (p.open ? '30px' : '50px')};
	width: 100%;
	align-items: center;
	text-decoration: none;

	padding: 2px 5px;

	justify-content: ${(p) => (p.open ? 'space-between' : 'center')};

	color: ${(p) => p.theme.text.secondary};

	& svg {
		width: ${(p) => (p.open ? '25px' : '35px')};
		height: ${(p) => (p.open ? '25px' : '35px')};
	}

	& div {
		width: 100%;
		display: ${(p) => (p.open ? 'flex' : 'none')};
		justify-content: left;
		padding-left: 10px;
		align-items: center;
		height: 40px;
	}

	&.active {
		color: ${(p) => p.theme.text.primary};
		background: ${(p) => p.theme.sidebar.linkActive};
	}

	&:hover {
		color: ${(p) => p.theme.text.primary};
	}
`;

export const SidebarContext = React.createContext([false, () => {}]);

const Sidebar = () => {
	const [open] = React.useContext(SidebarContext);

	return (
		<Container open={open}>
			<PageLink to="/" end>
				<RiDashboardFill />
				<div>Dashboard</div>
			</PageLink>

			<Spacer />
		</Container>
	);
};

export default Sidebar;
