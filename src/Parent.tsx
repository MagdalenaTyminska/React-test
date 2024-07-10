import { useEffect, useState } from 'react';
import { Child } from './Child';

export const Parent = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	console.log('Rendering parent');

	return (
		<>
			<h1> {counter} </h1>
			<Child />
		</>
	);
};
