import { ChangeEvent, FormEvent } from 'react';
import { BookDto } from './types/types';

type BookFormProps = {
	handleSubmit: (e: FormEvent) => void;
	handleChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	newBook: BookDto;
	isPending: boolean;
	error: Error | null;
};

export const BookForm = ({
	handleSubmit,
	handleChange,
	newBook,
	isPending,
	error,
}: BookFormProps) => {
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					id='title'
					name='title'
					value={newBook.title}
					onChange={handleChange}
					required
				/>
				<label htmlFor='year'>Year</label>
				<input
					type='number'
					id='year'
					name='year'
					value={newBook.year}
					onChange={handleChange}
					required
				/>
				<label htmlFor='description'>Description</label>
				<textarea
					id='description'
					name='description'
					value={newBook.description}
					onChange={handleChange}
					required
				/>
				<button type='submit' disabled={isPending}>
					Save
				</button>
				{error && <p>{error.message}</p>}
			</form>
		</>
	);
};
