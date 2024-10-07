import { useDeleteBooksMutation } from './queries/useDeleteBooksMutation';
import { BookEntity } from './types/types';

type DeleteBookProps = {
	book: BookEntity;
	onCancel: () => void;
};

export const DeleteBook = ({ book, onCancel }: DeleteBookProps) => {
	const {
		mutate: deleteBook,
		isPending,
		error,
	} = useDeleteBooksMutation(book.id);

	const handleDelete = () => {
		deleteBook();
	};

	if (isPending) return <p> Loading...</p>;

	return (
		<>
			<div>
				<p>
					Do you really want to delete book <strong>{book.title}</strong>?
				</p>
				<button disabled={isPending} onClick={handleDelete}>
					Delete
				</button>
				{error && <p>{error.message}</p>}
				<button disabled={isPending} onClick={onCancel}>
					Cancel
				</button>
			</div>
		</>
	);
};
