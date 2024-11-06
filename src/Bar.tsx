import styled from 'styled-components';
import { shadow } from './helpers';

const Element = styled.div<{ color: string }>`
	width: 300px;
	height: 100px;
	padding: 30px;
	border: 1px solid red;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.background};
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	${shadow}
`;

export const Bar = () => {
	return <Element color='green'>Dolor sit amet</Element>;
};
