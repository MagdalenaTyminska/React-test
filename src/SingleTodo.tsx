import { Todo } from './types/types';
import { useTodoDelete } from './hooks/useTodoDelete';
import { useEffect } from 'react';

type SingleTodoProps = {
	onTodoRemove: (id: string) => void;
	element: Todo;
};

export const SingleTodo = ({ element, onTodoRemove }: SingleTodoProps) => {
	const { deleteTodo, data, loading, error } = useTodoDelete();

	const onDelete = () => {
		deleteTodo(element.id);
	};

	useEffect(() => {
		if (!data) return;
		onTodoRemove(data.id);
	}, [data]);

	return (
		<li key={element.id}>
			<p>{element.title} </p>
			<button disabled={loading} onClick={onDelete}>
				Delete
			</button>
			{error && <p>{error}</p>}
		</li>
	);
};
