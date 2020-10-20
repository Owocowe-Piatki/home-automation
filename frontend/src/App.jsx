import styled from 'styled-components';
import React, { useState } from 'react';
import Burger from './components/Burger';
import Menu from './components/Menu';

import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

import { HashRouter, Route, Routes } from 'react-router-dom';

const AppWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

const ContentWrapper = styled.div`
	width: 95vw;
	max-width: 1000px;
	text-align: center;
`;

const DashboardWrapper = styled.div`
	position: absolute;
	margin-left: 150px;
	height: 90vh;
	text-align: left;
	top: 5rem;
`;

const App = () => {
	//const [toggleTheme] = React.useContext(ThemeContext);

	const [hamburger, setHamburger] = useState(false);

	return (
		<AppWrapper>
			<ContentWrapper>
				<Burger hamburger={hamburger} setHamburger={() => setHamburger(!hamburger)} />
				<Menu open={hamburger} />
				<DashboardWrapper>
					<HashRouter>
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/settings" element={<Settings />} />
						</Routes>
					</HashRouter>
				</DashboardWrapper>
			</ContentWrapper>
		</AppWrapper>
	);
};

export default App;
