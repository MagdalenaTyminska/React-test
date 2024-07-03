import { useState } from 'react';
import './App.scss';
import { Child } from './Child';

export const App = () => {
	const [counter, setCounter] = useState(0);

	const inc = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	return (
		<>
			<Child value={1} />
			<button onClick={inc}>+1 {counter}</button>
		</>
	);
};
