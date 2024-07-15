import './App.scss';
import { RandomArraySorter } from './RandomArraySorter';
import { Form } from './Form';

export const App = () => {
	return (
		<>
			<RandomArraySorter direction='DESC' />
			<Form />
		</>
	);
};
