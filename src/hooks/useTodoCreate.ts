import { useState } from 'react';
import { useApi } from './useApi';
import { Todo, TodoDto } from '../types/types';

export const useTodoCreate = () => {
	const { apiPost, loading, error } = useApi();
	const [data, setData] = useState<Todo>();

	const createTodo = async (title: string) => {
		const response = await apiPost<Todo, TodoDto>(`todos`, { title });
		if (response) setData(response);
	};

	return {
		createTodo,
		data,
		loading,
		error,
	};
};
