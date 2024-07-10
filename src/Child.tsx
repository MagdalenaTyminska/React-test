import { GrandChild } from './GrandChild';
import { memo, useMemo } from 'react';

type ChildProps = {
	second: number;
};

export const Child = memo(({ second }: ChildProps) => {
	console.log('Rendering child');

	const generateArray = (howMany: number) => {
		const arr: number[] = [];

		for (let i = 0; i < howMany; i++) {
			arr.push(Math.round(Math.random() * 1000));
		}

		return arr;
	};

	const elements = useMemo(() => generateArray(second), [second]);

	return (
		<>
			<h2>I am a child!</h2>
			<GrandChild elements={elements} />
		</>
	);
});

// import { GrandChild } from './GrandChild';
// import { memo } from 'react';

// export const Child = memo(() => {
// 	console.log('Rendering child');

// 	return (
// 		<>
// 			<h2>I am a child!</h2>
// 			<GrandChild />
// 		</>
// 	);
// });
