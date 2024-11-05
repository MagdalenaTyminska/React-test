import { ReactNode, useState } from 'react';
import scss from './Wrapper.module.scss';
import clsx from 'clsx';

type WrapperProps = {
	children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
	const [isActive, setIsActive] = useState(false);
	const [isPrimary, setIsPrimary] = useState(false);

	const toggleActive = () => {
		setIsActive((prevActive) => !prevActive);
	};
	const togglePrimary = () => {
		setIsPrimary((prevPrimary) => !prevPrimary);
	};

	return (
		<>
			<button onClick={togglePrimary}>Toggle primary</button>
			<div
				className={clsx(scss.wrapper, {
					[scss.active]: isActive,
					[scss.primary]: isPrimary,
				})}
				onClick={toggleActive}
				role='button'
			>
				{children}
			</div>
		</>
	);
};
