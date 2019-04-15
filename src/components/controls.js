import React, { useState, useEffect } from 'react'
import styled from "styled-components"

const ControlsContainer = styled.div`
  box-shadow: 0 4px 20px gainsboro;
  border-radius: 0.5rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
`

const Control = styled.div`
  p {
    margin-bottom: 0.2rem;
  }
  padding: 1rem;
`

function Controls(props) {

  function setWidth(e) {
    e.preventDefault()
    let newWidth = e.target.value || 200
    
    return props.setWidth(newWidth)
  }

  function setColor(e, element) {
    e.preventDefault()
    let newColor = e.target.value
    if (element === "header") {
      return props.setHeaderColor(newColor)
    }
    if (element === "avatar") {
      return props.setAvatarColor(newColor)
    }
    if (element === "lines") {
      return props.setLinesColor(newColor)
    }
    if (element === "background") {
      return props.setBackgroundColor(newColor)
    }
  }

  function setNumOfLines(e) {
    e.preventDefault()
    let newNumOfLines = e.target.value || 3

    return props.setNumOfLines(newNumOfLines)
  }

  return (
    <ControlsContainer>
      <Control>
        <p>Width</p>
        <input onChange={setWidth} name="width" type="number" min="0" defaultValue="200" />
      </Control>
      <Control>
        <p>Header Color</p>
        <input name="height" type="color" defaultValue="#6340b5" onChange={e => setColor(e, "header")} />
      </Control>
      <Control>
        <p>Avatar Color</p>
        <input name="height" type="color" defaultValue="#bcdcc8" onChange={e => setColor(e, "avatar")} />
      </Control>
      <Control>
        <p>Background Color</p>
        <input name="height" type="color" defaultValue="#ffffff" onChange={e => setColor(e, "background")} />
      </Control>
      <Control>
        <p>Lines Color</p>
        <input name="height" type="color" defaultValue="#d9d9d9" onChange={e => setColor(e, "lines")} />
      </Control>
      <Control>
        <p>Lines</p>
        <input name="lines" type="range" min="1" max="12" defaultValue="1" onChange={setNumOfLines} />
      </Control>
      <Control>
        <a href={`data:image/svg+xml,${props.downloadSvg}`} download="image.svg">Download</a>
      </Control>
    </ControlsContainer>
  )
}

export default Controls
