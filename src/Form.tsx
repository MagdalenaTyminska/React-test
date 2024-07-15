import { TekstInput } from './TekstInput';
import { useCallback, useEffect, useState } from 'react';

export const Form = () => {
	const [first, setFirst] = useState('first');
	const [second, setSecond] = useState('second');
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const handleFirstChange = useCallback((value: string) => {
		setFirst(value);
	}, []);

	const handleSecondChange = useCallback((value: string) => {
		setSecond(value);
	}, []);

	return (
		<>
			<h1>{time.toLocaleTimeString()}</h1>
			<TekstInput value={first} onChange={handleFirstChange} />
			<TekstInput value={second} onChange={handleSecondChange} />
		</>
	);
};
