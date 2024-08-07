import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { Book } from '../types/types';

export const useDeleteBooksMutation = () => {
	const { apiDelete } = useApi();

	const queryClient = useQueryClient();

	const { data, error, isPending, mutate } = useMutation({
		mutationKey: ['books'],
		mutationFn: async (bookId: string) => {
			return apiDelete<Book>(`books/${bookId}`);
		},
		onSuccess: (deletedBook) => {
			queryClient.setQueryData<Book[]>(['books'], (oldBooks) => {
				return oldBooks?.filter((book) => book.id !== deletedBook.id);
			});
		},
	});

	return {
		data,
		error,
		isPending,
		mutate,
	};
};
