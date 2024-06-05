import { useEffect, useState } from 'react';
import { useDebouncedState } from './hooks/useDebouncedState';

export const Exercise2 = () => {
	const [counter, setCounter] = useState(0);
	const debounceCounter = useDebouncedState(counter, 300);

	const onClick = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	useEffect(() => {
		if (debounceCounter === 0) return;
		console.log('Starting procedure to launch nukes');
	}, [debounceCounter]);

	return (
		<div>
			<h1>{debounceCounter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
};
