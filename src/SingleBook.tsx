import { Book } from './types/types';
import { useDeleteBooksMutation } from './queries/useDeleteBooksMutation';
// import { useEditBooksMutation } from './queries/useEditBooksMutation';

type SingleBookProps = {
	element: Book;
};

export const SingleBook = ({ element }: SingleBookProps) => {
	const { mutate: deleteBook, isPending, error } = useDeleteBooksMutation();
	// const { mutate: editBook } = useEditBooksMutation();

	const onDelete = () => {
		deleteBook(element.id);
	};

	// const onEdit = () => {
	// 	editBook(element);
	// };

	return (
		<>
			<li key={element.id}>
				<p>{element.year} </p>
				<p>{element.title} </p>
				<p>{element.description} </p>
				<button disabled={isPending} onClick={onDelete}>
					Delete
				</button>
				{/* <button disabled={isPending} onClick={onEdit}>
					Edit
				</button> */}
				{error && <p>{error.message}</p>}
			</li>
		</>
	);
};
