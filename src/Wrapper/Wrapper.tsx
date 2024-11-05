import { ReactNode, useState } from 'react';
import styles from './Wrapper.module.scss';

type WrapperProps = {
	children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive((prevActive) => !prevActive);
	};

	return (
		<div
			className={`${styles.wrapper} ${isActive ? styles.active : ''}`}
			onClick={toggleActive}
			role='button'
		>
			{children}
		</div>
	);
};
