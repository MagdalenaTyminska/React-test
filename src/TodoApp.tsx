import { useGetTodosQuery } from './queries/useGetTodosQuery';
import { SingleTodo } from './SingleTodo';
import { TodoForm } from './TodoForm';
import { TopTodos } from './TopTodos';

export const TodoApp = () => {
	const { data, isPending, error } = useGetTodosQuery();

	if (isPending) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<>
			<TopTodos />
			<TodoForm />
			<ul>
				{data?.map((element) => (
					<SingleTodo key={element.id} element={element} />
				))}
			</ul>
		</>
	);
};
