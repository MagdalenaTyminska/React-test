import { FormEvent, useState } from 'react';
import { BookForm } from './BookForm';
import { BookEntity } from './types/types';
import { useEditBooksMutation } from './queries/useEditBooksMutation';

type EditBookProps = {
	book: BookEntity;
};

export const EditBook = ({ book }: EditBookProps) => {
	const { mutate: editBook, isPending, error } = useEditBooksMutation(book.id);

	const [values, setValues] = useState({
		title: book.title,
		year: book.year,
		description: book.description,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value, type } = e.target;

		setValues((prevValues) => ({
			...prevValues,
			[name]: type === 'number' ? Number(value) : value,
		}));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		editBook({
			title: values.title,
			description: values.description,
			year: values.year,
		});
	};

	if (isPending) return <p>Loading...</p>;

	return (
		<BookForm
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			isPending={isPending}
			values={values}
			error={error}
			buttonLabel='Save'
		/>
	);
};
