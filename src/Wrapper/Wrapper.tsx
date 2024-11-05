import { ReactNode, useState } from 'react';
import scss from './Wrapper.module.scss';

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
				className={`${scss.wrapper} ${isActive ? scss.active : ''} ${isPrimary ? scss.primary : ''}`}
				onClick={toggleActive}
				role='button'
			>
				{children}
			</div>
		</>
	);
};
