import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Card = ({id, index, pic, bgChange, selected}) => {

  const [hidden, setHidden] = useState(false)

  return ( <div id={id} class={`card ${(index === selected) ? ' hidden' : ' shown'}`} style={{backgroundImage: `url(${pic})`}} onClick={() => bgChange(index)} /> )
}

export default Card