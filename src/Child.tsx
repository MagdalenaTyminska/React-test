import { memo, useMemo } from 'react';

type ChildProps = {
	value: number[];
	counter: number;
};

const heavyCalculations = (numbers: number[]) => {
	console.log('Heavy calculations start');
	let result = numbers.length ** 2;
	for (let i = 0; i < 1000000; i++) {
		result += (result * 2) % 255;
	}
	console.log('Heavy calculations stop');
	return result;
};

export const Child = memo(({ value, counter }: ChildProps) => {
	//renderuje się tylko przy zmianie propsów
	const calculatedValue = useMemo(() => heavyCalculations(value), [value]);
	console.log('Render');
	return (
		<h1>
			Hello world!{value.join()} {counter}
			{calculatedValue}
		</h1>
	);
});
