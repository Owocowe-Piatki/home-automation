import styled from 'styled-components';
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { GrLogout } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import { RiDashboardLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const MenuStyled = styled.nav`
	height: 100vh;
	width: ${({ open }) => (open ? '220px' : '80px')};
	position: fixed;
	background-color: ${(p) => p.theme.background};
	top: 5%;
	bottom: 5%;
	left: 0;
	transition: 0.5s;
	overflow: hidden;
	z-index: 1;
	padding-top: 60px;
	white-space: nowrap;
	border-right: 2px solid black;

	a {
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		font-size: 25px;
		color: ${(p) => p.theme.text};
		display: block;

		&:hover {
			color: grey;
		}
		span {
			position: relative;
			left: 3rem;
		}

		i {
			position: absolute;
			left: 2rem;
		}
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: ${({ open }) => (open ? '100%' : '0')};
		border: none;
	}
`;

const BottomContainer = styled.div`
	position: absolute;
	bottom: 5%;
`;

const TopContainer = styled.div`
	position: absolute;
	top: 5%;
`;

const Menu = ({ open }) => {
	return (
		<MenuStyled open={open}>
			<TopContainer>
				<a href="/">
					<i>
						<RiDashboardLine />
					</i>
					<span label="about us">Dashboard</span>
				</a>
				<a href="/#/profile">
					<i>
						<BsFillPersonFill />
					</i>
					<span label="about us">Profile</span>
				</a>
			</TopContainer>

			<BottomContainer>
				<a href="/#/settings">
					<i>
						<FiSettings />
					</i>
					<span label="settings">Settings</span>
				</a>
				<a href="/users/logout">
					<i>
						<GrLogout />
					</i>
					<span label="logout">Logout</span>
				</a>
			</BottomContainer>
		</MenuStyled>
	);
};

Menu.propTypes = {
	open: PropTypes.bool,
};

export default Menu;
