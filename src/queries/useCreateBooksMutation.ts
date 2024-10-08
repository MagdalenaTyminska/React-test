import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { BookEntity, BookDto } from '../types/types';

export const useCreateBooksMutation = () => {
	const { apiPost } = useApi();
	const queryClient = useQueryClient();

	const { error, isPending, mutate } = useMutation({
		mutationKey: ['books', 'create'],
		mutationFn: async (payload: BookDto) => {
			return apiPost<BookEntity, BookDto>(`books`, payload);
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
