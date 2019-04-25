import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"

import { InputWrapper, Input, Icon } from "./input"

const PickerWrapper = styled.div`
  display: inline-block;
  position: relative;
`

const ColorBox = styled.div`
  background-color: ${props => props.color};
  border-radius: 0.3rem;
  box-shadow: 0 1px 3px grey;
  float: left;
  height: 1.5rem;
  margin: 0 0.5rem 0.5rem 0;
  transition: box-shadow 0.2s, transform 0.2s;
  width: 1.5rem;
  &.is-active {
    box-shadow: 0 1px 7px grey;
    transform: translateY(-1px);
  }
  &:hover {
    cursor: pointer;
  }
`

const ColorMenu = styled.div`
  background-color: #fff;
  border-radius: 0.3rem;
  bottom: calc(100% + 10px);
  display: none;
  padding: 1rem;
  position: absolute;
  &.is-active {
    display: block;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
`

function ColorPicker(props) {
  const [palette, setPalette] = useState([
    "#6340b5",
    "#f85f73",
    "#3490de",
    "#1fab89",
    "#30e3ca",
    "#2d4059",
    "#f08a5d",
    "#ffd460",
    "#fbe8d3",
    "#d9d9d9"
  ])
  const [menu, setMenu] = useState(false)
  const [activeColor, setActiveColor] = useState(null)
  const [colorHex, setColorHex] = useState("6340b5")
  const colorPicker = useRef(null)
  const colorBox = useRef(null)

  function openMenu(e) {
    const color = e.target.dataset.color
    if (colorPicker.current.contains(e.target)) {
      setActiveColor(color)
      setMenu(true)
    }
    else {
      setActiveColor()
      setMenu(false)
    }
  }

  function changeColorBox(e) {
    const color = e.target.dataset.color
    setActiveColor(color)
    colorBox.current.style.backgroundColor = color
    colorBox.current.dataset.color = color
    return props.setColor(color, props.element)
  }

  function changeColorInput(e) {
    e.stopPropagation()
    const color = `#${e.target.value}`
    if (color.length > 1) {
      setActiveColor(color)
      setColorHex(color)
      colorBox.current.style.backgroundColor = color
      colorBox.current.dataset.color = color
      return props.setColor(color, props.element)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', openMenu, false)

    return () => {
      document.removeEventListener('mousedown', openMenu, false)
    }
  }, [])

  return (
    <PickerWrapper ref={colorPicker}>
      <ColorBox ref={colorBox} className={menu ? "is-active" : ""}
        color={props.color} data-color={props.color}
        onClick={ (e) => openMenu(e) }
      />
      <ColorMenu className={menu ? "is-active" : ""}>
        {palette.map((color, index) => (
          <ColorBox
            className={ activeColor === color ? "is-active" : "" }
            key={index} color={color} data-color={color}
            onClick={ (e) => changeColorBox(e) }
          />
        ))}
        <InputWrapper>
          <Icon background="gainsboro" color="black" left>#</Icon>
          <Input name="colorhex" type="text" className="is-color"
            spellCheck="false"
            defaultValue={colorHex}
            onFocus={ (e) => changeColorInput(e) }
            onChange={ (e) => changeColorInput(e) }
          />
        </InputWrapper>
      </ColorMenu>
    </PickerWrapper>
  )
}

export default ColorPicker
