import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';
import Settings from './Settings';

//import Profile from './Profile'

test('Button displays correct text', () => {
	const component = renderer.create(<Button>Test</Button>);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Settings displays correct text', () => {
	const component = renderer.create(<Settings>Test</Settings>);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

/*
test('Profile displays correct text', () => {
	const component = renderer.create(<Profile>Test</Profile>);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
*/
