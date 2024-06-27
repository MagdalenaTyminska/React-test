import { useRef } from 'react';
import './App.scss';
import { ForwardedInput } from './ForwardedInput';

export const App = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		inputRef.current?.focus();
	};

	return (
		<>
			<button onClick={handleClick}>Focus</button>
			<ForwardedInput value='Lorem ipsum' ref={inputRef} />
		</>
	);
};
