import { useEffect } from 'react';
import { useSubTodoDelete } from './hooks/useSubTodoDelete';
import { SubTodo } from './types/types';

type SingleSubTodoProps = {
	element: SubTodo;
	onDeleteCallback: () => void;
};

export const SingleSubTodo = ({
	element,
	onDeleteCallback,
}: SingleSubTodoProps) => {
	const { deleteSubTodo, data, loading, error } = useSubTodoDelete();

	const onDelete = () => {
		deleteSubTodo(element.id);
	};

	useEffect(() => {
		if (!data) return;
		onDeleteCallback();
	}, [data]);

	return (
		<>
			<li>
				<p>{element.title} </p>
				<button disabled={loading} onClick={onDelete}>
					Delete
				</button>
				{error && <p>{error}</p>}
			</li>
		</>
	);
};
