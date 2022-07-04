import React from 'react'

const Card = ({id, index, pic, bgChange}) => {
  return (
    <div id={id} class={`card`} style={{backgroundImage: `url(${pic})`}} onClick={() => bgChange(index)}>
    </div>
  )
}

export default Card