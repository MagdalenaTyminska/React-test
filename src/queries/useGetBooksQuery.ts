import { useQuery } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { BookEntity } from '../types/types';

export const useGetBooksQuery = () => {
	const { apiGet } = useApi();
	const { data, error, isFetching } = useQuery({
		queryKey: ['books'],
		queryFn: async () => {
			return apiGet<BookEntity[]>('books');
		},
	});

	return { data, error, isFetching };
};
