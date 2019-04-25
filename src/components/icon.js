import styled from "styled-components"

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  content: ${props => props.content};
  background-color: ${props => props.background};
  color: ${props => props.color};
  height: 30px;
  width: 30px;
`

export default Icon
