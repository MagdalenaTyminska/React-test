import { useRef } from 'react';
import { Input } from './Input';

export const Exercise1 = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		inputRef.current?.focus();
	};

	return (
		<>
			<button onClick={handleClick}>Click to focus</button>
			<Input passedRef={inputRef} />
		</>
	);
};
