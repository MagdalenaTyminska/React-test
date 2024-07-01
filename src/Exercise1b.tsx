import { useRef } from 'react';
import { Input2 } from './Input2';

export const Exercise1b = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		inputRef.current?.focus();
	};

	return (
		<>
			<button onClick={handleClick}>Click to focus</button>
			<Input2 ref={inputRef} />
		</>
	);
};
