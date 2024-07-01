import { useEffect, useRef } from 'react';

type Props = {
	value: number;
};

export const CounterRef = ({ value }: Props) => {
	const counter = useRef(0);

	useEffect(() => {
		const interval = setInterval(() => {
			counter.current++;
			console.log(counter.current);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [counter]);

	return (
		<h1>
			{value}|{counter.current}
		</h1>
	);
};
// Ref nie powoduje rerenderu i nie zmienia wartości wyświetlanej. Zmiany widać w console.logu
// Referencja zachowuje swoją wartość
