import { useRef } from 'react';

export const useOneTimeRef = <T>(initFN: () => T) => {
	const value = useRef<T | null>(null);
	if (value.current === null) {
		value.current = initFN();
	}

	return value;
};
