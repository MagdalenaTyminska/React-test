import './App.scss';
import { FirstCounter } from './FirstCounter';
import { SecondCounter } from './SecondCounter';
// import { useCounter } from './hooks/useCounter';
// import { useDebouncedState } from './hooks/useDebouncedState';

const App = () => {
	return (
		<>
			<FirstCounter />
			<SecondCounter />
		</>
	);
};

export { App };
