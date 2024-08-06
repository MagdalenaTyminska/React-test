import { Todo } from './types/types';
import { useState } from 'react';
import { SubTodos } from './SubTodos';
import { useDeleteTodoMutation } from './queries/useDeleteTodoMutation';

type SingleTodoProps = {
	element: Todo;
};

export const SingleTodo = ({ element }: SingleTodoProps) => {
	const { mutate: deleteTodo, isPending, error } = useDeleteTodoMutation();
	const [showTodos, setShowTodos] = useState(false);

	const onDelete = () => {
		deleteTodo(element.id);
	};

	const toggleSubTodos = () => {
		setShowTodos((prevShowTodos) => !prevShowTodos);
	};

	return (
		<>
			<li key={element.id}>
				<p>{element.title} </p>
				<button disabled={isPending} onClick={onDelete}>
					Delete
				</button>
				<button disabled={isPending} onClick={toggleSubTodos}>
					Show more
				</button>
				{showTodos && <SubTodos todoId={element.id} />}

				{error && <p>{error.message}</p>}
			</li>
		</>
	);
};
