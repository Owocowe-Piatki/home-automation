import styled from 'styled-components';

import React from 'react';
import Sidebar, { SidebarContext } from 'Components/Sidebar';
import Routing from 'Components/Routing';
import Topbar from 'Components/Topbar';

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	padding-top: ${(p) => p.theme.topbar.height};
	display: flex;
`;

const App = () => {
	const [sidebar, setSidebar] = React.useState(false);

	return (
		<SidebarContext.Provider value={[sidebar, setSidebar]}>
			<Topbar />
			<AppContainer>
				<Sidebar />
				<Routing />
			</AppContainer>
		</SidebarContext.Provider>
	);
};

export default App;
