import styled from 'styled-components';

const Button = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;

	color: ${(p) => p.theme.button.text};
	text-decoration: none;

	background: ${(p) => p.theme.button.background};
	box-shadow: ${(p) => p.theme.button.shadow};

	&:hover {
		cursor: pointer;
		background: ${(p) => p.theme.button.backgroundHover};
	}
`;

export default Button;
