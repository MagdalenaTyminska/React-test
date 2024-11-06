import { ThemeProvider } from 'styled-components';
import './App.scss';
import { Button } from './Button/Button';
import { Wrapper } from './Wrapper/Wrapper';
import { Elements } from './Elements/Elements';

export const App = () => {
	const theme = {
		colors: {
			primary: '#0242e4',
			textLight: '#fee0fe',
		},
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<Wrapper>
					{' '}
					<h1>Hello</h1>{' '}
				</Wrapper>
				<Button />
				<Elements />
			</ThemeProvider>
		</>
	);
};
