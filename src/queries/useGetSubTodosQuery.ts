import { useQuery } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { TodoWithSubTodos } from '../types/types';

export const useGetSubTodosQuery = (todoId: string) => {
	const { apiGet } = useApi();
	const { data, error, isPending } = useQuery({
		queryKey: ['subtodos', todoId],
		queryFn: async () => {
			return apiGet<TodoWithSubTodos>(`todos/${todoId}?_embed=subtodos`);
		},
	});

	return { data: data ? data.subtodos : undefined, error, isPending };
};
