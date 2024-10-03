import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { Book, BookDto } from '../types/types';

export const useEditBooksMutation = (bookId: string) => {
	const { apiPut } = useApi();

	const queryClient = useQueryClient();

	const { error, isPending, mutate } = useMutation({
		mutationKey: ['books', 'update', bookId],
		mutationFn: async ({ year, title, description }: BookDto) => {
			return apiPut<Book, BookDto>(`books/${bookId}`, {
				year,
				title,
				description,
			});
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
