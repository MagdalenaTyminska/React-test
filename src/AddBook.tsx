import { FormEvent, useState } from 'react';
import { useCreateBooksMutation } from './queries/useCreateBooksMutation';
import { BookForm } from './BookForm';

export const AddBook = () => {
	const { mutate: createBook, error, isPending } = useCreateBooksMutation();

	const [values, setValues] = useState({
		title: '',
		year: 2024,
		description: '',
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
		createBook({
			title: values.title,
			description: values.description,
			year: values.year,
		});
		setValues({
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
			values={values}
			error={error}
			buttonLabel='Add'
		/>
	);
};
