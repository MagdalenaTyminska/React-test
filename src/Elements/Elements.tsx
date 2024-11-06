import styled, { css } from 'styled-components';

const common = css<{ size: number }>`
	height: ${(props) => props.size}px;
	width: ${(props) => props.size}px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const getColoredValues = (first: string, second: string) => css`
	background-color: ${first};
	border: ${second};
`;

const First = styled.div<{
	size: number;
	firstColor: string;
	secondColor: string;
}>`
	${common}
	${(props) => getColoredValues(props.firstColor, props.secondColor)}
`;

const Second = styled.div<{
	size: number;
	firstColor: string;
	secondColor: string;
}>`
	${common}
	${(props) => getColoredValues(props.firstColor, props.secondColor)}
`;

export const Elements = () => {
	return (
		<>
			<First size={250} firstColor='blue' secondColor='1px solid green'>
				Hello
			</First>
			<Second size={100} firstColor='red' secondColor='1px solid black'>
				world
			</Second>
		</>
	);
};
