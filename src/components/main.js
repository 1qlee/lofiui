import React, { useState, useEffect, useRef } from 'react'

import Controls from './controls'
import Container from './container'
import Preview from './preview'

function Main() {
  const [width, setWidth] = useState(250)
  const [headerColor, setHeaderColor] = useState("#6340b5")
  const [avatarColor, setAvatarColor] = useState("#aaeed5")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [linesColor, setLinesColor] = useState("#d9d9d9")
  const [numOfLines, setNumOfLines] = useState(3)
  const [height, setHeight] = useState(100 + numOfLines * 18)
  const svgDOM = useRef(null)
  const [svg] = useState(svgDOM)

  function initMain() {
    console.log("Initializing SVG preview...")
  }

  function generateLines(numOfLines) {
    let lines = []
    for (let i = 0; i < numOfLines; i++) {
      const lineWidth = 30 + Math.floor(50 * Math.random())
      lines.push(
        <rect key={i} width={lineWidth + "%"} height='10' x='20' y={75 + i * 20} fill={linesColor} rx='4' ry='8'/>
      )
    }
    console.log("Randomizing line widths...")
    return lines
  }

  useEffect(() => {
    initMain()
  })

  return (
    <Container>
      <Preview>
        <svg
          ref={svgDOM}
          id='svg'
          width={width}
          height={height}
          className="svg-lofiui"
          xmlns='http://www.w3.org/2000/svg'
          style={{background: backgroundColor}}
        >
          <rect width='100%' height='50' x='0' y='0' fill={headerColor} />
          <circle cx='34' cy='50' r='16' fill={avatarColor} />
          {generateLines(numOfLines)}
        </svg>
      </Preview>
      <Controls
        setWidth={setWidth}
        setHeight={setHeight}
        setHeaderColor={setHeaderColor}
        setLinesColor={setLinesColor}
        setAvatarColor={setAvatarColor}
        setBackgroundColor={setBackgroundColor}
        setNumOfLines={setNumOfLines}
        svgDOM={svgDOM}
        svg={svg}
      />
    </Container>
  );
}

export default Main
