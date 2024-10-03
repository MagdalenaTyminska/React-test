import { Book } from './types/types';
import { useDeleteBooksMutation } from './queries/useDeleteBooksMutation';
import { EditBook } from './EditBook';
import { useState } from 'react';

type SingleBookProps = {
	book: Book;
};

export const SingleBook = ({ book }: SingleBookProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const {
		mutate: deleteBook,
		isPending,
		error,
	} = useDeleteBooksMutation(book.id);

	const toggleEdit = () => {
		setIsEditing((prevIsEditing) => !prevIsEditing);
	};

	const onDelete = () => {
		deleteBook(book.id);
	};

	return (
		<>
			<li key={book.id}>
				<strong>
					<h2>{book.title}</h2>
				</strong>
				<p>{book.year} </p>
				<p>{book.description} </p>
				<button disabled={isPending} onClick={onDelete}>
					Delete
				</button>
				{error && <p>{error.message}</p>}
				<button onClick={toggleEdit}>{isEditing ? 'Cancel' : 'Edit'}</button>
				{isEditing ? <EditBook book={book} /> : undefined}
			</li>
		</>
	);
};
