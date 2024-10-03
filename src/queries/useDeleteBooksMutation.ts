import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { Book } from '../types/types';

export const useDeleteBooksMutation = (bookId: string) => {
	const { apiDelete } = useApi();

	const queryClient = useQueryClient();

	const { data, error, isPending, mutate } = useMutation({
		mutationKey: ['books', 'delete', bookId],
		mutationFn: async (bookId: string) => {
			return apiDelete<Book>(`books/${bookId}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [`books/${bookId}`] });
		},
	});

	return {
		data,
		error,
		isPending,
		mutate,
	};
};
