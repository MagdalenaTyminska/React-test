import { useGetBooksQuery } from './queries/useGetBooksQuery';
import { SingleBook } from './SingleBook';

export const BookList = () => {
	const { data, isPending, error } = useGetBooksQuery();

	if (isPending) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<>
			<h1>Books</h1>
			<ul>{data?.map((book) => <SingleBook key={book.id} book={book} />)}</ul>
		</>
	);
};
