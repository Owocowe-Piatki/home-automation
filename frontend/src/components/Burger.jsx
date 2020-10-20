import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Hamburger = styled.div`
	width: 30px;
	height: 24px;
	position: absolute;
	top: 5%;
	left: 2rem;
	z-index: 10;
	& span {
		display: block;
		position: relative;
		border-radius: 3px;
		width: 30px;
		height: 5px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s;

		background: ${(p) => (p.open ? p.theme.colors.error : p.theme.colors.accent)};
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

const Burger = ({ hamburger, setHamburger }) => {
	return (
		<Hamburger
			open={hamburger}
			onClick={() => {
				setHamburger(!hamburger);
			}}
		>
			<span />
			<span />
			<span />
		</Hamburger>
	);
};

Burger.propTypes = {
	hamburger: PropTypes.bool,
	setHamburger: PropTypes.func,
};

export default Burger;
