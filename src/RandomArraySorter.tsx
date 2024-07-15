import { useEffect, useMemo, useRef, useState } from 'react';

type RandomArraySorterProps = {
	direction: 'DESC' | 'ASC';
};

export const RandomArraySorter = ({ direction }: RandomArraySorterProps) => {
	const [randomLength, setRandomLength] = useState(10);

	const lengthRef = useRef(randomLength);

	const getArray = (dir: 'DESC' | 'ASC', len: number) => {
		const result: number[] = [];

		for (let i = 0; i < len; i++) {
			result.push(Math.round(Math.random() * 100));
		}

		result.sort((a, b) => (dir === 'ASC' ? a - b : b - a));

		return result;
	};

	useEffect(() => {
		const interval = setInterval(() => {
			const newLength = Math.round(Math.random() * 15) + 5;
			setRandomLength(newLength);
			lengthRef.current = newLength;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const elements = useMemo(
		() => getArray(direction, lengthRef.current),
		[direction],
	);

	return (
		<ul>
			{elements.map((value, index) => (
				<li key={index}>{value}</li>
			))}
		</ul>
	);
};
