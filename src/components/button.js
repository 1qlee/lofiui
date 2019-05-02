import styled from "styled-components"

const Button = styled.a`
  align-items: center;
  background-color: ${props => props.background};
  border-radius: 0.3rem;
  border: none;
  color: ${props => props.color};
  display: inline-flex;
  font-weight: 700;
  justify-content: center;
  padding: 0.5rem;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

export default Button
