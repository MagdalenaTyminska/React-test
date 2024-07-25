import { useTodos } from './hooks/useTodos';
import { SingleTodo } from './SingleTodo';
import { TodoForm } from './TodoForm';
import { TopTodos } from './TopTodos';

export const TodoApp = () => {
	const { data, loading, error, removeTodo, addTodo } = useTodos();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<>
			<TopTodos />
			<TodoForm onNewTodo={addTodo} />
			<ul>
				{data?.map((element) => (
					<SingleTodo
						key={element.id}
						onTodoRemove={removeTodo}
						element={element}
					/>
				))}
			</ul>
		</>
	);
};
