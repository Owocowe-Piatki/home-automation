import styled from 'styled-components';
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { RiDashboardLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const MenuStyled = styled.nav`
	align-items: flex-start;
	display: flex;
	flex-direction: column;

	padding-left: 20px;
	padding-top: 30px;
	height: 100vh;

	white-space: nowrap;

	width: ${({ open }) => (open ? '280px' : '80px')};
	background-color: ${(p) => p.theme.background};
	//idk how to animate with flexbox transition: 0.1s;
	border-right: 2px solid ${(p) => p.theme.textSecondary};

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: ${({ open }) => (open ? '100%' : '0')};
		border: none;
		background-color: ${(p) => p.theme.background};
	}

	a {
		text-decoration: none;
		font-size: 30px;
		color: ${(p) => p.theme.text};
		span {
			visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
		}

		i {
			@media (max-width: ${({ theme }) => theme.mobile}) {
				visibility: hidden;
			}
		}
	}
`;

const Hamburger = styled.div`
	width: 30px;
	height: 24px;
	z-index: 10;
	margin-left: 4px;
	margin-bottom: 20px;
	& span {
		display: block;
		position: relative;
		border-radius: 3px;
		width: 30px;
		height: 5px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s;

		background: ${(p) => (p.open ? p.theme.colors.error : p.theme.text)};
	}

	&:hover {
		cursor: pointer;
	}

	& span:nth-child(1) {
		transform: ${(p) => (p.open ? 'translateY(9px) rotate(45deg)' : '')};
	}

	& span:nth-child(3) {
		transform: ${(p) => (p.open ? 'translateY(-9px) rotate(-45deg)' : '')};
	}

	& span:nth-child(2) {
		margin-top: 4px;
		margin-bottom: 4px;
		opacity: ${(p) => (p.open ? 0 : 1)};
		transition: opacity 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s;
	}
`;

const Spacer = styled.div`
	flex-grow: 1;
`;

const Menu = ({ open, setHamburger }) => {
	return (
		<MenuStyled open={open}>
			<Hamburger
				open={open}
				onClick={() => {
					setHamburger(!open);
				}}
			>
				<span />
				<span />
				<span />
			</Hamburger>

			<a href="/#/">
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

			<Spacer />
			<a href="/#/settings">
				<i>
					<FiSettings />
				</i>
				<span label="settings">Settings</span>
			</a>
			<a href="/users/logout">
				<i>
					<FiLogOut />
				</i>
				<span label="logout">Logout</span>
			</a>
		</MenuStyled>
	);
};

Menu.propTypes = {
	open: PropTypes.bool,
	setHamburger: PropTypes.func,
};


export default Menu;
