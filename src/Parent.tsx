import { useEffect, useState } from 'react';
import { Child } from './Child';

export const Parent = () => {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);

		const interval2 = setInterval(() => {
			setCounter2((prevCounter) => prevCounter + 1);
		}, 5000);

		return () => {
			clearInterval(interval);
			clearInterval(interval2);
		};
	}, []);

	console.log('Rendering parent');

	return (
		<>
			<h1> {counter}</h1>
			<Child second={counter2} />
		</>
	);
};

// import { useEffect, useState } from 'react';
// import { Child } from './Child';

// export const Parent = () => {
// 	const [counter, setCounter] = useState(0);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setCounter((prevCounter) => prevCounter + 1);
// 		}, 1000);

// 		return () => {
// 			clearInterval(interval);
// 		};
// 	}, []);

// 	console.log('Rendering parent');

// 	return (
// 		<>
// 			<h1> {counter} </h1>
// 			<Child />
// 		</>
// 	);
// };
