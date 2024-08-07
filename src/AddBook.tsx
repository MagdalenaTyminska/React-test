import { FormEvent, useState } from 'react';
import { useCreateBooksMutation } from './queries/useCreateBooksMutation';

export const AddBook = () => {
	const { mutate: createBook, error, isPending } = useCreateBooksMutation();

	const [newBook, setNewBook] = useState({
		year: '',
		title: '',
		description: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewBook({
			...newBook,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		createBook({
			...newBook,
			year: parseInt(newBook.year, 10),
		});
		setNewBook({
			year: '',
			title: '',
			description: '',
		});
	};

	if (isPending) return <p>Loading...</p>;

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='year'>Year</label>
			<input
				type='number'
				id='year'
				name='year'
				value={newBook.year}
				onChange={handleChange}
				required
			/>
			<label htmlFor='title'>Title</label>
			<input
				type='text'
				id='title'
				name='title'
				value={newBook.title}
				onChange={handleChange}
				required
			/>
			<label htmlFor='description'>Description</label>
			<input
				type='text'
				id='description'
				name='description'
				value={newBook.description}
				onChange={handleChange}
				required
			/>
			<button type='submit'>Add Book</button>
			{error && <p>{error.message}</p>}
		</form>
	);
};
