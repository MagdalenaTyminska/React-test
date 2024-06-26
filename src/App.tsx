import { useRef } from 'react';
import './App.scss';

export const App = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		// niepoprawny zapis
		// document.querySelector('input')?.select();
		// const inputRef = useRef<HTMLInputElement>(null);
		inputRef.current?.focus();
	};

	return (
		<>
			<button onClick={handleClick}>Focus</button>
			<input type='text' ref={inputRef} />
		</>
	);
};
