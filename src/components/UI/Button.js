import styled from 'styled-components'
const StyledButton = styled.button`
	border: none;
	border-radius: 10px;
	width: 60px;
	height: 40px;
	color: rgb(94, 94, 180);
	font-size: 20px;
	font-weight: 600;
	cursor:pointer;
    &:hover{
      background:rgb(252, 230, 201);
    }
    
`
const Button = (props) => {
	return <StyledButton {...props}>{props.children}</StyledButton>
}
export default Button
