import React from 'react';

const lightTheme = {
	background: 'hsl(0, 0%, 90%)',
	buttonBg: '#e5e5e5',

	text: {
		primary: '#000',
		secondary: '#696969',
	},

	box: {
		background: '#FFFFFF',
		shadow: '2px 2px 0px 2px hsla(0, 0%, 100%, 50%)',
		highlight: 'rgba(255, 255, 255, 0.5)',
	},

	topbar: {
		height: '50px',
		background: 'hsl(0, 0%, 20%)',
		text: 'hsl(0, 0%, 70%)',
		textActive: 'hsl(0, 0%, 90%)',
	},

	sidebar: {
		narrow: {
			width: '50px',
		},

		wide: {
			width: '250px',
		},

		background: '#FFFFFF',

		linkActive: 'hsl(0, 0%, 95%)',
	},
};

const darkTheme = {
	background: 'hsl(0, 0%, 17%)',
	buttonBg: '#6f6f6f',

	text: {
		primary: '#EFE9F4',
		secondary: '#B0B0B0',
	},

	box: {
		background: '#505050',
		shadow: '2px 2px 0px 2px hsla(0, 0%, 34%, 38%)',
		highlight: 'hsla(0, 0%, 34%, 38%)',
	},

	topbar: {
		height: '50px',
		background: 'hsl(0, 0%, 20%)',
		text: 'hsl(0, 0%, 70%)',
		textActive: 'hsl(0, 0%, 85%)',
	},

	sidebar: {
		narrow: {
			width: '50px',
		},

		wide: {
			width: '250px',
		},

		background: '#444444',
		linkActive: 'hsl(0, 0%, 22%)',
	},
};

// Create react context for theme info
export const ThemeContext = React.createContext([{}, () => {}, false]);

// Define a hook to control theme from any component
export const useTheme = () => {
	let stored = localStorage.getItem('theme');

	// If no theme variant is stored in local storage, check if client wants dark theme and set accordingly
	if (!stored) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			stored = 'dark';
		} else {
			stored = 'light';
		}
		localStorage.setItem('theme', stored);
	}

	// Create a state variable holding theme variant
	const [theme, setTheme] = React.useState(stored);

	// Theme switcher function
	const switchTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	let isDark = theme === 'dark';
	return [isDark ? darkTheme : lightTheme, switchTheme, isDark];
};
