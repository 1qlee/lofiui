import React, { useState } from 'react'
import styled from "styled-components"

import Button from "./button"
import ColorPicker from "./colorpicker"
import { Input } from "./input"

const ControlsContainer = styled.div`
  box-shadow: 0 4px 20px gainsboro;
  border-radius: 0.5rem;
  display: flex;
`

const Control = styled.div`
  p {
    margin-bottom: 0.2rem;
  }
  padding: 1rem;
`

function Controls(props) {
  const [svg, setSvg] = useState(null)

  function trimSvg(svg) {
    const reformattedSvg = svg.current.outerHTML
                    .replace('<svg',(~svg.current.outerHTML.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"'))
                    .replace(/"/g, '\'')
                    .replace(/%/g, '%25')
                    .replace(/#/g, '%23')
                    .replace(/{/g, '%7B')
                    .replace(/}/g, '%7D')
                    .replace(/</g, '%3C')
                    .replace(/>/g, '%3E')
                    .replace(/\s+/g,' ')

    return setSvg(reformattedSvg)
  }

  function setWidth(e) {
    e.preventDefault()
    let newWidth = e.target.value || 250

    return props.setWidth(newWidth)
  }

  function setColor(color, element) {
    if (element === "header") {
      return props.setHeaderColor(color)
    }
    if (element === "avatar") {
      return props.setAvatarColor(color)
    }
    if (element === "lines") {
      return props.setLinesColor(color)
    }
    if (element === "background") {
      return props.setBackgroundColor(color)
    }
  }

  function setNumOfLines(e) {
    e.preventDefault()
    let newNumOfLines = e.target.value || 3
    props.setHeight(100 + newNumOfLines * 19)

    return props.setNumOfLines(newNumOfLines)
  }

  return (
    <ControlsContainer>
      <Control>
        <p>Width</p>
        <Input onChange={setWidth} name="width" type="number" min="0" defaultValue="250" />
      </Control>
      <Control>
        <p>Header</p>
        <ColorPicker element="header" color="#6340b5" setColor={setColor} />
      </Control>
      <Control>
        <p>Avatar</p>
        <ColorPicker element="avatar" color="#30e3ca" setColor={setColor} />
      </Control>
      <Control>
        <p>Background</p>
        <ColorPicker element="background" color="#ffffff" setColor={setColor} />
      </Control>
      <Control>
        <p>Lines</p>
        <ColorPicker element="lines" color="#d9d9d9" setColor={setColor} />
      </Control>
      <Control>
        <p>Number of Lines</p>
        <input name="numoflines" type="range" min="1" max="12" defaultValue="3" onChange={setNumOfLines} />
      </Control>
      <Control>
        <Button
          background="#6340b5"
          color="#fff"
          href={`data:image/svg+xml,${svg}`}
          download="image.svg"
          onClick={() => trimSvg(props.svg)}
        >
          Download
        </Button>
      </Control>
    </ControlsContainer>
  )
}

export default Controls
