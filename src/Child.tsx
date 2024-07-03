import { memo } from 'react';

type ChildProps = {
	value: number;
};

const heavyCalculations = () => {
	console.log('Heavy calculations start');
	for (let i = 0; i < 1000000; i++) {
		return i++;
	}
	console.log('Heavy calculations stop');
	return 100;
};

export const Child = memo(({ value }: ChildProps) => {
	//renderuje się tylko przy zmianie propsów
	const calculatedValue = heavyCalculations();
	console.log('Render');
	return (
		<h1>
			Hello world!{value} {calculatedValue}
		</h1>
	);
});
