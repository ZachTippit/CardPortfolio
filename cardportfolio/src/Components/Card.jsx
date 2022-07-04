import React from 'react'

const Card = ({id, index, bgChange}) => {
  return (
    <div id={id} class={`card`} onClick={() => bgChange(index)}>
        <h4>{id}</h4>
    </div>
  )
}

export default Card