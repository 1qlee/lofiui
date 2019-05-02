import React, { useState } from 'react'
import styled from "styled-components"

import ColorPicker from "./colorpicker"
import Button from "./button"
import { Input } from "./input"

import Lines from "../../assets/menu.svg"
import Download from "../../assets/download.svg"
import Randomize from "../../assets/magic.svg"

const ControlsContainer = styled.div`
  box-shadow: 0 4px 20px gainsboro;
  border-radius: 0.5rem;
  display: flex;
  height: 105px;
  width: 1000px;
  margin: 0 auto;
`

const Control = styled.div`
  p {
    margin-bottom: 0.2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
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
        <div>
          <p>Width</p>
          <Input onChange={setWidth} name="width" type="number" min="0" defaultValue="250" />
        </div>
      </Control>
      <Control>
        <div>
          <p>Header</p>
          <ColorPicker element="header" color="#6340b5" setColor={setColor} />
        </div>
      </Control>
      <Control>
        <div>
          <p>Avatar</p>
          <ColorPicker element="avatar" color="#30e3ca" setColor={setColor} />
        </div>
      </Control>
      <Control>
        <div>
          <p>Background</p>
          <ColorPicker element="background" color="#ffffff" setColor={setColor} />
        </div>
      </Control>
      <Control>
        <div>
          <p>Lines</p>
          <ColorPicker element="lines" color="#d9d9d9" setColor={setColor} />
        </div>
      </Control>
      <Control>
        <div>
          <p>Number of Lines</p>
          <input name="numoflines" type="range" min="1" max="12" defaultValue="3" onChange={setNumOfLines} />
        </div>
      </Control>
      <Control>
        <Button
          as="button"
          background="#6340b5"
          color="#fff"
          onClick={() => props.setRandoms(props.generateRandoms)}
        >
          <Lines style={{fill: "white"}} />
        </Button>
      </Control>
      <Control>
        <Button
          as="button"
          background="#6340b5"
          color="#fff"
          >
          <Randomize style={{fill: "white"}} />
        </Button>
      </Control>
      <Control>
        <Button
          background="#6340b5"
          color="#fff"
          href={`data:image/svg+xml,${svg}`}
          download="image.svg"
          onClick={() => trimSvg(props.svg)}
          >
          <Download style={{fill: "white"}} />
        </Button>
      </Control>
    </ControlsContainer>
  )
}

export default Controls
