import { useEffect, useState } from 'react';

export const useDebouncedState = <T>(value: T, delay: number) => {
	const [debounceValue, setDebounceValue] = useState<T | null>(null);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(timeout);
		};
	}, [value, delay]);

	return debounceValue;
};
