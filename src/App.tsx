import './App.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BookList } from './BookList';
// import { BookStats } from './BookStats';

const queryClient = new QueryClient();

export const App = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				{/* <BookStats /> */}
				<BookList />
			</QueryClientProvider>
		</>
	);
};
