import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './App.scss';
// import { Button } from './Button';
// import { Text } from './Text';
// import { Wrapper } from './Wrapper';
import { Foo } from './Foo';
import { Bar } from './Bar';

const GlobalStyle = createGlobalStyle`
body {
background-color: ${(props) => props.theme.colors.background}
}
`;

export const App = () => {
	const light = {
		colors: {
			primary: '#0333EE',
			background: '#fff',
			textPrimary: '#eee',
			textBackground: '#333',
		},
	};

	return (
		<>
			<ThemeProvider theme={light}>
				<GlobalStyle />
				{/* <Wrapper>
					<Button label='click' />
					<Text>Lorem ipsum</Text>
				</Wrapper> */}
				<Foo />
				<Bar />
			</ThemeProvider>
		</>
	);
};
