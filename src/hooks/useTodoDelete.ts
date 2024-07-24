import { useState } from 'react';
import { useApi } from './useApi';
import { Todo } from '../types/types';

export const useTodoDelete = () => {
	const { apiDelete, loading, error } = useApi();
	const [data, setData] = useState<Todo>();

	const deleteTodo = async (id: string) => {
		const response = await apiDelete<Todo>(`todos/${id}`);
		if (response) setData(response);
	};

	return {
		deleteTodo,
		data,
		loading,
		error,
	};
};
