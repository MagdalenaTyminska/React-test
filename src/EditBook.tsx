import { FormEvent, useState } from 'react';
import { BookForm } from './BookForm';
import { Book } from './types/types';
import { useEditBooksMutation } from './queries/useEditBooksMutation';

type EditBookProps = {
	book: Book;
};

export const EditBook = ({ book }: EditBookProps) => {
	const { mutate: editBook, isPending, error } = useEditBooksMutation(book.id);
	const [newBook, setNewBook] = useState({
		title: book.title,
		year: book.year,
		description: book.description,
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
		editBook({
			title: newBook.title,
			description: newBook.description,
			year: newBook.year,
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
		/>
	);
};
