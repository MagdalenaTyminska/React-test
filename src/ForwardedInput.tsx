import { ForwardedRef, forwardRef } from 'react';

type Props = {
	value: string;
};

export const ForwardedInput = forwardRef(
	({ value }: Props, ref: ForwardedRef<HTMLInputElement>) => {
		return <input type='text' value={value} ref={ref} />;
	},
);
