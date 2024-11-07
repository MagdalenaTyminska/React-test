import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './App.scss';
import { Button } from './Button';
import { Text } from './Text';
import { Wrapper } from './Wrapper';
import { useState } from 'react';
import { Bouncy } from './Bouncy';

const GlobalStyle = createGlobalStyle`
body {
background-color: ${(props) => props.theme.colors.background}
}
`;

export const App = () => {
	const [isLight, setLight] = useState(true);

	const light = {
		colors: {
			primary: '#0333EE',
			background: '#fff',
			textPrimary: '#eee',
			textBackground: '#333',
		},
	};

	const dark = {
		colors: {
			primary: '#9ca5df',
			background: '#000',
			textPrimary: '#333',
			textBackground: '#eee',
		},
	};

	const toggleTheme = () => {
		setLight((prevLight) => !prevLight);
	};

	return (
		<>
			<ThemeProvider theme={isLight ? light : dark}>
				<GlobalStyle />
				<Wrapper>
					<Button label='click' onClick={toggleTheme} />
					<Text>Lorem ipsum</Text>
				</Wrapper>
				<Bouncy />
			</ThemeProvider>
		</>
	);
};
