import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { Book, BookDto } from '../types/types';

export const useCreateBooksMutation = () => {
	const { apiPost } = useApi();

	const queryClient = useQueryClient();

	const { data, error, isPending, mutate } = useMutation({
		mutationKey: ['books', 'create'],
		mutationFn: async ({ year, title, description }: BookDto) => {
			return apiPost<Book, BookDto>(`books`, { year, title, description });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['books'] });
		},
	});

	return {
		data,
		error,
		isPending,
		mutate,
	};
};
