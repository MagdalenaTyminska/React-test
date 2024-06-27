import { useRef } from 'react';
import './App.scss';
import { LimitedForwarded, PartialHTMLInputElement } from './LimitedForwarded';

export const App = () => {
	const inputRef = useRef<PartialHTMLInputElement>(null);

	const handleClick = () => {
		inputRef.current?.focus();
	};

	return (
		<>
			<button onClick={handleClick}>Focus</button>
			<LimitedForwarded value='Lorem ipsum' ref={inputRef} />
		</>
	);
};
