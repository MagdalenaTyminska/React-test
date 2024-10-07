import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { Book } from '../types/types';

export const useDeleteBooksMutation = (bookId: string) => {
	const { apiDelete } = useApi();
	const queryClient = useQueryClient();

	const { mutate, error, isPending } = useMutation({
		mutationKey: ['books', 'delete', bookId],
		mutationFn: async () => {
			return apiDelete<Book>(`books/${bookId}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [`books`] });
		},
	});

	return {
		mutate,
		error,
		isPending,
	};
};
