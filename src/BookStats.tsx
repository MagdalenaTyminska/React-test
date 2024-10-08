import { useGetBooksQuery } from './queries/useGetBooksQuery';

export const BookStats = () => {
	const { data, isFetching, error } = useGetBooksQuery();

	if (isFetching) return <p>Loading book stats...</p>;

	if (error) return <p>Failed to load book stats</p>;

	if (!data || data.length === 0) return <p>No books available!</p>;

	return (
		<div>
			<h2> Quantity of books </h2>
			<p>{data.length}</p>
			<ul>{data?.map((book) => <li key={book.id}>{book.title}</li>)}</ul>
		</div>
	);
};
