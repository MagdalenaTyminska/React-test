import { useQuery } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { Book } from '../types/types';

export const useGetBooksQuery = () => {
	const { apiGet } = useApi();
	const { data, error, isPending } = useQuery({
		queryKey: ['books'],
		queryFn: async () => {
			return apiGet<Book[]>('books');
		},
	});

	return { data, error, isPending };
};
