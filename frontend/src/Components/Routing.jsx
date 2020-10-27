import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

const Dashboard = React.lazy(() => import(/* webpackChunkName: 'dashboard' */ 'Pages/Dashboard'));
const Settings = React.lazy(() => import(/* webpackChunkName: 'settings' */ 'Pages/Settings'));
const Profile = React.lazy(() => import(/* webpackChunkName: 'profile' */ 'Pages/Profile'));

const PageContainer = styled.div`
	padding: 0 10px;
	width: 100%;
	height: 100%;
`;

const Routing = () => {
	return (
		<PageContainer>
			<React.Suspense fallback={<div>Loading</div>}>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</React.Suspense>
		</PageContainer>
	);
};

export default Routing;
