import { useGetBooksQuery } from './queries/useGetBooksQuery';
import { SingleBook } from './SingleBook';

export const BookList = () => {
	const { data, isPending, error } = useGetBooksQuery();

	if (isPending) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<>
			<ul>
				{data?.map((element) => (
					<SingleBook key={element.id} element={element} />
				))}
			</ul>
		</>
	);
};
