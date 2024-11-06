import styled from 'styled-components';

const StyledButton = styled.button`
border: none;
font-family: 'Tahoma'
border-radius: 5px;
padding: 20px;
background-color: ${(props) => props.theme.colors.primary};
color: ${(props) => props.theme.colors.textLight};
`;

export const Button = () => {
	return (
		<>
			<StyledButton>Click</StyledButton>
		</>
	);
};
