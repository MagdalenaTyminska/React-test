import { useEffect, useRef, useState } from 'react';

export const Exercise2 = () => {
	const counter1 = useRef(0);
	const [counter2, setCounter2] = useState(0);

	useEffect(() => {
		const interval1 = setInterval(() => {
			counter1.current++;
		}, 1000);

		const interval2 = setInterval(() => {
			setCounter2((prevCounter) => prevCounter + 1);
		}, 5000);

		return () => {
			clearInterval(interval1);
			clearInterval(interval2);
		};
	}, []);

	return (
		<h1>
			{counter1.current} | {counter2}
		</h1>
	);
};
