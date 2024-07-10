import { useState } from 'react';
import './App.scss';
import { Parent } from './Parent';

export const App = () => {
	const [id, setId] = useState(1000);

	const randomizeId = () => {
		setId(Math.round(Math.random() * 10000));
	};

	return (
		<>
			<div>
				<h1>ID: {id}</h1>
				<button onClick={randomizeId}>Randomize ID</button>
				<Parent id={id} />
			</div>
		</>
	);
};

// import './App.scss';
// import { Parent } from './Parent';

// export const App = () => {

// 	return (
// 		<>
// 			<Parent />
// 		</>
// 	);
// };
