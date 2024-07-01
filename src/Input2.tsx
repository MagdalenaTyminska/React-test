import { ForwardedRef, forwardRef } from 'react';

export const Input2 = forwardRef(
	(_, ref: ForwardedRef<HTMLInputElement | null>) => {
		return <input type='text' ref={ref} />;
	},
);
