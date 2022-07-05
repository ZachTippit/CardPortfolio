import React from 'react'
import {default as logoTxt} from '../Img/zoat-text.png'
import {default as logoGif} from '../Img/desk-logo.gif'

const Title = () => {
  return (
    <div id='Title'>
         <img class='logos' src={logoGif} alt='Animated gif of Zach of All Trades' />
         <img class='logos' src={logoTxt} alt='Zach of All Trades Text' />
    </div>
  )
}

export default Title