import { useState } from 'react';
import { useApi } from './useApi';
import { SubTodo, SubTodoDto } from '../types/types';

export const useSubTodoCreate = () => {
	const { apiPost, loading, error } = useApi();
	const [data, setData] = useState<SubTodo>();

	const createSubTodo = async (title: string, todoId: string) => {
		const response = await apiPost<SubTodo, SubTodoDto>(`subtodos`, {
			title,
			todoId,
		});
		if (response) setData(response);
	};

	return {
		createSubTodo,
		data,
		loading,
		error,
	};
};
