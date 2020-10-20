import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext, useTheme } from './theme';
import { GlobalStyle } from './global';

import App from './App';

const Root = () => {
	const [theme, toggleTheme, isDark] = useTheme();

	return (
		<ThemeContext.Provider value={[toggleTheme, isDark]}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

// Render App with providers on #root
ReactDOM.render(
	<Root />,

	document.getElementById('root')
);
