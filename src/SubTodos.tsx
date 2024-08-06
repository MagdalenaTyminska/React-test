import { useGetSubTodosQuery } from './queries/useGetSubTodosQuery';
import { SingleSubTodo } from './SingleSubTodo';
import { SubTodoForm } from './SubTodoForm';

type SubTodosProps = {
	todoId: string;
};

export const SubTodos = ({ todoId }: SubTodosProps) => {
	const { data, error, isPending } = useGetSubTodosQuery(todoId);

	if (error) return <p>{error.message}</p>;
	if (isPending) return <p>Loading...</p>;
	if (!data) return null;

	return (
		<>
			<SubTodoForm todoId={todoId} />
			<ul>
				{data.map((subtodo) => (
					<SingleSubTodo key={subtodo.id} element={subtodo} />
				))}
			</ul>
		</>
	);
};
