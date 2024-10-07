import { ChangeEvent, FormEvent } from 'react';
import { BookDto } from './types/types';

type BookFormProps = {
	handleSubmit: (e: FormEvent) => void;
	handleChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	values: BookDto;
	isPending: boolean;
	error: Error | null;
	buttonLabel: string;
};

export const BookForm = ({
	handleSubmit,
	handleChange,
	values,
	isPending,
	error,
	buttonLabel,
}: BookFormProps) => {
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					id='title'
					name='title'
					value={values.title}
					onChange={handleChange}
					required
				/>
				<label htmlFor='year'>Year</label>
				<input
					type='number'
					id='year'
					name='year'
					value={values.year}
					onChange={handleChange}
					required
				/>
				<label htmlFor='description'>Description</label>
				<textarea
					id='description'
					name='description'
					value={values.description}
					onChange={handleChange}
					required
				/>
				<button type='submit' disabled={isPending}>
					{buttonLabel}
				</button>
				{error && <p>{error.message}</p>}
			</form>
		</>
	);
};
