import { useEffect, useState } from 'react';
import { useApi } from './useApi';
import { SubTodo, TodoWithSubTodos } from '../types/types';

export const useSubTodos = (todoId: string) => {
	const { apiGet, loading, error } = useApi();
	const [data, setData] = useState<SubTodo[]>();

	const getSubTodos = async () => {
		const response = await apiGet<TodoWithSubTodos>(
			`todos/${todoId}?_embed=subtodos`,
		);
		if (response) setData(response.subtodos);
	};

	// const removeTodo = (id: string) => {
	// 	setData((prevTodos) => prevTodos?.filter((todo) => todo.id !== id));
	// };

	// const addTodo = (todo: SubTodo) => {
	// 	setData((prevTodos) => [...(prevTodos || []), todo]);
	// };

	useEffect(() => {
		getSubTodos();
	}, []);

	return {
		data,
		loading,
		error,
		getSubTodos,
		// removeTodo,
		// addTodo,
	};
};
