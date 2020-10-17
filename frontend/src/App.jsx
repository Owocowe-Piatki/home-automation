import React from 'react';
import styled from 'styled-components';
import Gitref from 'Components/Gitref';
import { ImGithub } from 'react-icons/im';
const AppWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ContentWrapper = styled.div`
	width: 95vw;
	max-width: 1000px;
	text-align: center;
`;



const App = () => {


	return (
		<AppWrapper>
			<ContentWrapper>
			 
			<Gitref href="https://github.com/owocowe-piatki/home-automation"> <ImGithub/> home-automation</Gitref> 

			</ContentWrapper>
		</AppWrapper>
	);
};

export default App;
