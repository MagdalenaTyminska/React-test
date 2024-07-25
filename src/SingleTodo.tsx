import { Todo } from './types/types';
import { useTodoDelete } from './hooks/useTodoDelete';
import { useEffect, useState } from 'react';
import { SubTodos } from './SubTodos';

type SingleTodoProps = {
	onTodoRemove: (id: string) => void;
	element: Todo;
};

export const SingleTodo = ({ element, onTodoRemove }: SingleTodoProps) => {
	const { deleteTodo, data, loading, error } = useTodoDelete();
	const [showTodos, setShowTodos] = useState(false);

	const onDelete = () => {
		deleteTodo(element.id);
	};

	const toggleSubTodos = () => {
		setShowTodos((prevShowTodos) => !prevShowTodos);
	};

	useEffect(() => {
		if (!data) return;
		onTodoRemove(data.id);
	}, [data]);

	return (
		<>
			<li key={element.id}>
				<p>{element.title} </p>
				<button disabled={loading} onClick={onDelete}>
					Delete
				</button>
				<button disabled={loading} onClick={toggleSubTodos}>
					Show more
				</button>
				{showTodos && <SubTodos todoId={element.id} />}

				{error && <p>{error}</p>}
			</li>
		</>
	);
};
