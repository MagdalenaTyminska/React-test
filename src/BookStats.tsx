// import { useStats } from './hooks/useStats';

// export const BookStats = () => {
// 	const { length, books } = useStats();

// 	return (
// 		<div>
// 			<h2> Quantity of books </h2>
// 			<p>{length}</p>
// 			<ul>
// 				{books.map((book) => (
// 					<li key={book.id}>{book.title}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// import { useGetBooksQuery } from './queries/useGetBooksQuery';

// export const BookStats = () => {
// 	const { data, isFeatching } = useGetBooksQuery();

// 	if (isFeatching) return <p>Loading book stats...</p>;

// 	return (
// 		<div>
// 			<h2> Quantity of books </h2>
// 			<p>{data?.length || 'No data'}</p>
// 			<ul>
// 				{books.map((book) => (
// 					<li key={book.id}>{book.title}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };
