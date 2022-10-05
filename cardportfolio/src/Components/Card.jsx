import { useState } from 'react'

const Card = ({id, index, pic, bgChange, selected, isIntro}) => {

  return ( <div id={`${isIntro ? 'Intro-' : ''}${id}`} className={`card ${(index === selected) ? ' hidden noselect' : ' shown'}`} style={{backgroundImage: `url(${pic})`}} onClick={() => bgChange(index)} /> )
}

export default Card