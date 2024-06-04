import './App.scss';
import { useConsoleLog } from './hooks/useConsoleLog';
import { useCustomLogger } from './hooks/useCustomLogger';

const App = () => {
	useConsoleLog();
	// const { logCount, log } = useCustomLogger('Test_App');
	// 	const logSth = () => {
	// 		log(Math.round(Math.random() * 1000).toString());
	// 	};

	// 	return (
	// 		<div>
	// 			<h1>{logCount}</h1>
	// 			<button onClick={logSth}>Log sth</button>
	// 		</div>
	// 	);
	// };

	const [logCount, log] = useCustomLogger('Test_App');

	const logSth = () => {
		log(Math.round(Math.random() * 1000).toString());
	};

	return (
		<div>
			<h1>{logCount}</h1>
			<button onClick={logSth}>Log sth</button>
		</div>
	);
};

export { App };
