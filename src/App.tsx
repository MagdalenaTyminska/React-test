import './App.scss';
import { FirstCounter } from './FirstCounter';
import { SecondCounter } from './SecondCounter';
import { Exercise2 } from './Exercise2';
import { Exercise2Hello } from './Exercise2Hello';

const App = () => {
	return (
		<>
			<FirstCounter />
			<SecondCounter />
			<Exercise2 />
			<Exercise2Hello />
		</>
	);
};

export { App };
