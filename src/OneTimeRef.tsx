import { useEffect, useRef, useState } from 'react';

const getRandomValue = () => {
	const random = Math.round(Math.random() * 1000);
	console.log('generating', random);
	return random;
};

export const OneTimeRef = () => {
	const value = useRef<number | null>(null);
	if (value.current === null) {
		value.current = getRandomValue();
	}
	// dzięki if funkcaj wywołu się tylko raz

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<h1>
			{counter} | {value.current}
		</h1>
	);
};
