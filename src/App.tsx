import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hello } from './Hello';

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes />
				<Route path='/' element={<Hello />} />
				<Routes />
			</BrowserRouter>
		</>
	);
};
