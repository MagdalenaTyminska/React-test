import { useEffect, useState } from 'react';

export const useCounter = (initalValue: number, delay: number) => {
	const [counter, setCounter] = useState(initalValue);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, delay);

		return () => {
			clearInterval(interval);
		};
	}, [delay]);

	return counter;
};
