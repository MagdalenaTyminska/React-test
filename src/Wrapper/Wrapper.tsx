import { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';

type WrapperProps = {
	children: ReactNode;
};

const StyledBox = styled.div<{
	color: string;
	isActive: boolean;
	shadowColor: string;
}>`
	background-color: ${(props) => props.color};
	padding: ${(props) => (props.isActive ? '30px' : '5px')};
	${(props) =>
		props.isActive
			? css<{ shadowColor: string }>`
					box-shadow: 0px 0px 10px 10px ${(props) => props.shadowColor};
					border: 1px solid green;
				`
			: ''}
`;

export const Wrapper = ({ children }: WrapperProps) => {
	const [isActive, setIsActive] = useState(false);
	const toggleActive = () => {
		setIsActive((prevActive) => !prevActive);
	};

	return (
		<>
			<StyledBox
				onClick={toggleActive}
				role='button'
				color='#ddd'
				isActive={isActive}
				shadowColor='red'
			>
				{children}
			</StyledBox>
		</>
	);
};
