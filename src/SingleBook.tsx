import { BookEntity } from './types/types';
import { EditBook } from './EditBook';
import { DeleteBook } from './DeleteBook';
import { useState } from 'react';

type SingleBookProps = {
	book: BookEntity;
};

export const SingleBook = ({ book }: SingleBookProps) => {
	const [mode, setMode] = useState<'edit' | 'delete' | 'none'>('none');

	const toggleEdit = () => {
		setMode((prevMode) => (prevMode === 'edit' ? 'none' : 'edit'));
	};

	const toggleDelete = () => {
		setMode((prevMode) => (prevMode === 'delete' ? 'none' : 'delete'));
	};

	return (
		<>
			<li>
				<h2>
					<strong>{book.title}</strong>
					{book.year}
				</h2>
				<p>{book.description} </p>

				<button onClick={toggleEdit}>
					{mode === 'edit' ? 'Cancel' : 'Edit'}
				</button>
				{mode === 'edit' ? <EditBook book={book} /> : undefined}

				<button onClick={toggleDelete}>
					{mode === 'delete' ? 'Cancel' : 'Delete'}
				</button>
				{mode === 'delete' ? (
					<DeleteBook onCancel={toggleDelete} book={book} />
				) : undefined}
			</li>
		</>
	);
};
