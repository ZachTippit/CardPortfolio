import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Card = ({id, index, pic, bgChange, selected, isIntro}) => {

  const [hidden, setHidden] = useState(false)

  return ( <div id={`${isIntro ? 'Intro-' : ''}${id}`} className={`card ${(index === selected) ? ' hidden' : ' shown'}`} style={{backgroundImage: `url(${pic})`}} onClick={() => bgChange(index)} /> )
}

export default Card