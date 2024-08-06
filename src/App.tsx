import './App.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TodoApp } from './TodoApp';

const queryClient = new QueryClient();

export const App = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<TodoApp />
			</QueryClientProvider>
		</>
	);
};
