import { useEffect, useState } from 'react';
import { useOneTimeRef } from './hooks/useOneTimeRef';

const getRandomValue = () => {
	const random = Math.round(Math.random() * 1000);
	console.log('generating', random);
	return random;
};

export const OneTimeRef = () => {
	const value = useOneTimeRef(getRandomValue);
	// dzięki hookowi funkcja wywołuje się tylko raz, TO HOOK MUSI WYWOŁYWAĆ FUNKCJĘ

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
