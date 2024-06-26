import { useRef } from 'react';
import './App.scss';
import { Input } from './Input';

export const App = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		inputRef.current?.focus();
	};

	return (
		<>
			<button onClick={handleClick}>Focus</button>
			<Input value='Lorem ipsum' passedRef={inputRef} />
		</>
	);
};
