import { ReactNode } from 'react';

type WrapperProps = {
	children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
	return <div className='wrapper'>{children}</div>;
};
