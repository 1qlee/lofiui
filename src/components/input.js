import styled from "styled-components"

const InputWrapper =  styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  clear: both;
`

const Input = styled.input`
  border-radius: 0.5rem;
  border: 1px solid lightgrey;
  padding: 0.2rem;
  outline: none;
  width: 100px;
  &.has-icon {
    border-radius: 0 0.5rem 0.5rem 0;
    font-size: 0.8rem;
    padding-left: 0.5rem;
    height: 27px;
    width: 153px;
  }
  &:focus {
    border-color: #6340b5;
  }
`

const Icon = styled.div`
  align-items: center;
  background-color: ${props => props.background};
  border-radius: ${props => props.left ? "0.5rem 0 0 0.5rem" : ""};
  color: ${props => props.color};
  display: inline-flex;
  height: 27px;
  justify-content: center;
  width: 27px;
`

export { InputWrapper, Input, Icon }
