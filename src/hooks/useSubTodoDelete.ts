import { useState } from 'react';
import { useApi } from './useApi';
import { SubTodo } from '../types/types';

export const useSubTodoDelete = () => {
	const { apiDelete, loading, error } = useApi();
	const [data, setData] = useState<SubTodo>();

	const deleteSubTodo = async (id: string) => {
		const response = await apiDelete<SubTodo>(`subtodos/${id}`);
		if (response) setData(response);
	};

	return {
		deleteSubTodo,
		data,
		loading,
		error,
	};
};
