import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { BookEntity, BookDto } from '../types/types';

export const useEditBooksMutation = (bookId: string) => {
	const { apiPut } = useApi();
	const queryClient = useQueryClient();

	const { error, isPending, mutate } = useMutation({
		mutationKey: ['books', 'update', bookId],
		mutationFn: async (payload: BookDto) => {
			return apiPut<BookEntity, BookDto>(`books/${bookId}`, payload);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['books'] });
		},
	});

	return {
		error,
		isPending,
		mutate,
	};
};
