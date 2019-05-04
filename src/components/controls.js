import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import colorSchemes from "../data/colorSchemes"

import ColorPicker from "./colorpicker"
import Button from "./button"

import Lines from "../../assets/menu.svg"
import Download from "../../assets/download.svg"
import Randomize from "../../assets/magic.svg"

const ControlsContainer = styled.div`
  box-shadow: 0 4px 20px gainsboro;
  border-radius: 0.5rem;
  display: flex;
  height: 105px;
  width: 750px;
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
  const [currentScheme, setCurrentScheme] = useState([
    "#6340b5",
    "#30e3ca",
    "#ffffff",
    "#d9d9d9"
  ])
  const [svg, setSvg] = useState(null)

  useEffect(() => {
    console.log(currentScheme)
  })

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

  function generateColorScheme() {
    const randomNum = Math.floor(Math.random() * 10)
    const newScheme = colorSchemes[randomNum]

    props.setHeaderColor(newScheme[0])
    props.setAvatarColor(newScheme[1])
    props.setBackgroundColor(newScheme[2])
    props.setLinesColor(newScheme[3])
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
          onClick={() => setCurrentScheme(colorSchemes[generateColorScheme()])}
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
