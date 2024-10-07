import { FormEvent, useState } from 'react';
import { useCreateBooksMutation } from './queries/useCreateBooksMutation';
import { BookForm } from './BookForm';

export const AddBook = () => {
	const { mutate: createBook, error, isPending } = useCreateBooksMutation();

	const [newBook, setNewBook] = useState({
		title: '',
		year: 2024,
		description: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value, type } = e.target;

		setNewBook((prevNewBook) => ({
			...prevNewBook,
			[name]: type === 'number' ? Number(value) : value,
		}));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		createBook({
			title: newBook.title,
			description: newBook.description,
			year: newBook.year,
		});
		setNewBook({
			year: 2024,
			title: '',
			description: '',
		});
	};

	if (isPending) return <p>Loading...</p>;

	return (
		<BookForm
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			isPending={isPending}
			newBook={newBook}
			error={error}
			buttonLabel='Add'
		/>
	);
};
