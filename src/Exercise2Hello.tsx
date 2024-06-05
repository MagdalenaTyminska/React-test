import { useEffect, useState } from 'react';
import { useDebouncedState } from './hooks/useDebouncedState';

export const Exercise2Hello = () => {
	const [value, setValue] = useState('');
	const debouncedValue = useDebouncedState(value, 1000);

	const handleClick = () => {
		setValue((prevValue) => `${prevValue}${Math.round(Math.random() * 9)}`);
	};

	useEffect(() => {
		if (debouncedValue === null) return;
		console.log('Starting to call API for search results for', debouncedValue);
	}, [debouncedValue]);

	return (
		<div>
			<h1>{debouncedValue}</h1>
			<button onClick={handleClick}>Add letter</button>
		</div>
	);
};
