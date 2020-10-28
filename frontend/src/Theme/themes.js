import merge from 'lodash/merge';

const common = {
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
			width: '200px',
		},
	},
};

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

	sidebar: {
		narrow: {},
		wide: {},

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

	sidebar: {
		narrow: {},
		wide: {},

		background: '#444444',
		linkActive: 'hsl(0, 0%, 22%)',
	},
};

merge(lightTheme, common);
merge(darkTheme, common);

export default { dark: darkTheme, light: lightTheme };
