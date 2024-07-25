import { useTodos } from './useTodos';

export const useTopTodos = () => {
	const { data } = useTodos();

	return {
		// topTodos: (data || []).slice(0, 5),
		topTodos: data ? data.slice(0, 5) : [],
	};
};
