import { useEffect } from 'react';

type Props = {
	value: number;
};

export const CounterLet = ({ value }: Props) => {
	let counter = 0;

	useEffect(() => {
		const interval = setInterval(() => {
			counter++;
			console.log(counter);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [counter]);

	return (
		<h1>
			{value}|{counter}
		</h1>
	);
};

// po ponowym wyrenderowaniu wartość się zmienia
