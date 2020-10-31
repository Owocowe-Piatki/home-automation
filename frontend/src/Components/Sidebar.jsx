import { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { RiDashboardFill } from '@meronex/icons/ri';
import { MdcTestTube, MdcTestTubeEmpty } from '@meronex/icons/mdc';
import { motion, AnimateSharedLayout } from 'framer-motion';

const SidebarContainer = styled.nav`
	grid-area: sidebar;
	width: ${(p) => p.theme.sidebar.width};

	display: flex;
	flex-direction: column;
	z-index: 100;
	height: 100%;

	transition: transform 0.5s;

	@media screen and (max-width: 900px) {
		position: fixed;
		transform: ${(p) => (p.open ? 'translateX(0)' : 'translateX(-100%)')};
		background: ${(p) => p.theme.background};
		top: ${(p) => p.theme.topbar.height};
		left: 0;
		bottom: 0;
	}
`;

const PageLink = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	width: 100%;

	text-decoration: none;
	color: ${(p) => p.theme.text.primary};

	padding: 0 10px;

	& svg {
		width: 25px;
		height: 25px;
	}

	& div {
		width: 100%;
		display: flex;
		justify-content: left;
		padding-left: 10px;
		align-items: center;
		height: 40px;
		font-size: 0.9rem;
	}

	&:hover {
		color: ${(p) => p.theme.text.primary};
	}
`;

const AnimatedLinkBackground = styled(motion.div)`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -10;
	margin: -10px -10px;

	border-left: 5px solid ${(p) => p.theme.colors.accent};

	background: ${(p) => p.theme.sidebar.linkActive};
`;

const AnimatedPageLink = (props) => {
	const { pathname } = useLocation();

	return (
		<PageLink to={props.to} end={props.end}>
			{props.to == pathname ? <AnimatedLinkBackground layoutId="current" /> : null}
			{props.children}
		</PageLink>
	);
};

AnimatedPageLink.propTypes = {
	to: PropTypes.string,
	end: PropTypes.bool,
	children: PropTypes.array,
};

export const SidebarContext = createContext([false, () => {}]);

const Sidebar = () => {
	const [open, setOpen] = useContext(SidebarContext);

	const location = useLocation();

	useEffect(() => {
		console.log('Location changed');
		setOpen(false);
	}, [location, setOpen]);

	return (
		<SidebarContainer open={open}>
			<AnimateSharedLayout>
				<AnimatedPageLink to="/" end>
					<RiDashboardFill />
					<div>Dashboard</div>
				</AnimatedPageLink>

				<AnimatedPageLink to="/test1">
					<MdcTestTube />
					<div>Test 1</div>
				</AnimatedPageLink>

				<AnimatedPageLink to="/test2">
					<MdcTestTubeEmpty />
					<div>Test 2</div>
				</AnimatedPageLink>
			</AnimateSharedLayout>
		</SidebarContainer>
	);
};

export default Sidebar;
