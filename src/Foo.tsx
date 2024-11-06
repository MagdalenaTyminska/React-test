import styled from 'styled-components';
import { shadow } from './helpers';

const Element = styled.div<{ color: string }>`
	width: 200px;
	height: 200px;
	padding: 30px;
	border-radius: 10px;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.background};
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	${shadow}
`;

export const Foo = () => {
	return <Element color='blue'>Dolor sit amet</Element>;
};
