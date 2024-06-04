import { useState } from 'react';

type UseCustomLoggerReturn = [number, (what: string) => void];

export const useCustomLogger = (prefix: string): UseCustomLoggerReturn => {
	const [logCount, setLogCount] = useState<number>(0);

	const log = (what: string) => {
		console.log(`${prefix} - ${what}`);
		setLogCount((prevCount) => prevCount + 1);
	};
	return [logCount, log];

	// zwracanie obiektu

	// export const useCustomLogger = (prefix: string) => {
	// 	const [logCount, setLogCount] = useState<number>(0);

	// 	const log = (what: string) => {
	// 		console.log(`${prefix} - ${what}`);
	// 		setLogCount((prevCount) => prevCount + 1);
	// 	};

	// return {
	// 	logCount,
	// 	log,
	// };

	// return [logCount, log];
};
