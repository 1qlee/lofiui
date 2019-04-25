import styled from "styled-components"

const Button = styled.a`
  align-items: center;
  background-color: ${props => props.background};
  color: ${props => props.color};
  display: inline-flex;
  justify-content: center;
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.3rem;
  font-weight: 700;
`

export default Button
