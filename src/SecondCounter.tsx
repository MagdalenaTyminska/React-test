import { useCounter } from './hooks/useCounter';

export const SecondCounter = () => {
	const counter = useCounter(0, 500);

	return <h1>{counter}</h1>;
};
