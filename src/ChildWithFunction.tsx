import { memo, useEffect } from 'react';

type ChildWithFunctionProps = {
	callback: (value: number) => void;
};

export const ChildWithFunction = memo(
	({ callback }: ChildWithFunctionProps) => {
		console.log('render');

		useEffect(() => {
			callback(Math.round(Math.random() * 10));
		}, [callback]);

		return <p> Lorem ipsum</p>;
	},
);
