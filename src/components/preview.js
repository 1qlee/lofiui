import React, { useState, useEffect, useRef } from 'react'

import Controls from './controls'
import Columns from './columns'

function Preview() {
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(140)
  const [headerColor, setHeaderColor] = useState("#6340b5")
  const [avatarColor, setAvatarColor] = useState("#bcdcc8")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [linesColor, setLinesColor] = useState("#d9d9d9")
  const [numOfLines, setNumOfLines] = useState(3)
  const [svg, setSvg] = useState(null)
  const svgDOM = useRef(null)

  function initPreview() {
    console.log("Initializing SVG preview...")
  }

  function trimSvg(svg) {
    const reformattedSvg = svg.current.outerHTML
                    .replace('<svg',(~svg.current.outerHTML.indexOf('xmlns')?'<svg':'<svg xmlns="http://www.w3.org/2000/svg"'))
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

  useEffect(() => {
    initPreview()
    trimSvg(svgDOM)
  })

  return (
    <Columns>
      <Controls
        setWidth={setWidth}
        setHeaderColor={setHeaderColor}
        setLinesColor={setLinesColor}
        setAvatarColor={setAvatarColor}
        setBackgroundColor={setBackgroundColor}
        setNumOfLines={setNumOfLines}
        downloadSvg={svg}
      />
      <svg
        ref={svgDOM}
        id='svg'
        width={width}
        height={height}
        xmlns='http://www.w3.org/2000/svg'
        style={{borderRadius: '12px', boxShadow: '0 4px 20px gainsboro', background: backgroundColor}}
      >
        <rect width='100%' height='50' x='0' y='0' fill={headerColor} />
        <circle cx='34' cy='50' r='16' fill={avatarColor} />
        <rect width='30%' height='10' x='20' y='75' fill={linesColor} rx='4' ry='8'/>
        <rect width='70%' height='10' x='20' y='95' fill={linesColor} rx='4' ry='8'/>
        <rect width='45%' height='10' x='20' y='115' fill={linesColor} rx='4' ry='8'/>
      </svg>
    </Columns>
  );
}

export default Preview
