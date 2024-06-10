import { useNumbers } from './hooks/useNumbers';

export const FirstTask = () => {
	const { numbers, generateNumber, deleteNumber } = useNumbers();

	return (
		<>
			<ul>
				{numbers.map((number, index) => (
					<li key={index}>
						<p>{number}</p>
						<button onClick={() => deleteNumber(index)}>Delete</button>
					</li>
				))}
			</ul>
			<button onClick={generateNumber}>Add number</button>
		</>
	);
};
