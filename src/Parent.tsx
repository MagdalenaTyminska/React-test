import { useCallback } from 'react';
import { ChildWithFunction } from './ChildWithFunction';

type ParentProps = {
	id: number;
};

export const Parent = ({ id }: ParentProps) => {
	const foo = useCallback(
		(value: number) => {
			const url = `https://api.test.com/${id}?value=${value}`;
			console.log('Calling', url);
		},
		[id],
	);

	return <ChildWithFunction callback={foo} />;
};

// import { useState } from 'react';
// import { Child } from './Child';

// export const Parent = () => {
// 	const [counter, setCounter] = useState(0);
// 	const [arr, setArr] = useState([5]);

// 	const inc = () => {
// 		setCounter((prevCounter) => prevCounter + 1);
// 	};

// 	const addToArray = () => {
// 		setArr((prevArr) => [...prevArr, Math.round(Math.random() * 10)]);
// 	};

// 	return (
// 		<>
// 			<Child value={arr} counter={counter} />
// 			<button onClick={inc}>+1 </button>
// 			<button onClick={addToArray}>Add to array</button>
// 		</>
// 	);
// };
