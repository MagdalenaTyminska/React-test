import { useGetBooksQuery } from './queries/useGetBooksQuery';
import { SingleBook } from './SingleBook';
import { AddBook } from './AddBook';

export const BookList = () => {
	const { data, isFetching, error } = useGetBooksQuery();

	if (isFetching) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<>
			<h1>Books</h1>
			<AddBook />
			<ul>{data?.map((book) => <SingleBook key={book.id} book={book} />)}</ul>
		</>
	);
};
