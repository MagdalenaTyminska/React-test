import { useRef } from 'react';
import './App.scss';
import { LimitedForwarded, PartialHTMLInputElement } from './LimitedForwarded';
import { CounterRef } from './CounterRef';
import { CounterLet } from './CounterLet';

export const App = () => {
	const inputRef = useRef<PartialHTMLInputElement>(null);

	const handleClick = () => {
		inputRef.current?.focus();
	};

	return (
		<>
			<button onClick={handleClick}>Focus</button>
			<LimitedForwarded value='Lorem ipsum' ref={inputRef} />
			<CounterRef value={10} />
			<CounterLet value={10} />
		</>
	);
};
