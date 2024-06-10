import { useState } from 'react';

export const useNumbers = () => {
	const [numbers, setNumbers] = useState<number[]>([]);

	const generateNumber = () => {
		const newNumber = Math.round(Math.random() * 1000);
		setNumbers((prevNumbers) => [...prevNumbers, newNumber]);
	};

	const deleteNumber = (indexToDelete: number) => {
		setNumbers((prevNumbers) =>
			prevNumbers.filter((el, index) => index !== indexToDelete),
		);
	};

	return { numbers, generateNumber, deleteNumber };
};
