import { useGetBooksQuery } from '../queries/useGetBooksQuery';

export const useStats = () => {
	const { data } = useGetBooksQuery();

	return {
		length: data ? data.length : [],
		books: data || [],
	};
};
