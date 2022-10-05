import {default as logoTxt} from '../Img/zoat-text.png'
import {default as logoGif} from '../Img/desk-logo.gif'

const Title = () => {
  return (
    <a href='/'>
      <div id='Title'>
          <img className='logos' src={logoGif} alt='Animated gif of Zach of All Trades' />
          <img className='logos' src={logoTxt} alt='Zach of All Trades Text' />
      </div>
    </a>
  )
}

export default Title