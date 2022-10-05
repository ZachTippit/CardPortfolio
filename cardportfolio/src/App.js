import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import cardDraw from './card-draw.mp3';
import Card from './Components/Card'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Title from './Components/Title'
import { Player } from '@lottiefiles/react-lottie-player';
import duckAnimation from "./Lotties/duck.json";
import earthAnimation from './Lotties/earth.json'
import loadingAnimation from './Lotties/loading.json'
import {default as AboutCard} from './Img/AboutCard.png'
import {default as ProjectsCard} from './Img/ProjectsCard.png'
import {default as ContactCard} from './Img/ContactCard.png'
import ReactGA from 'react-ga'
import './App.css';
import './animations.css';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)

function App() {
  const [play] = useSound(cardDraw);
  const cards = [
    {
      id: 'About',
      animation: earthAnimation,
      pic: AboutCard,
      speed: 3
    },
    {
      id: 'Projects',
      animation: loadingAnimation,
      pic: ProjectsCard,
      speed: 5
    },
    {
      id: 'Contact',
      animation: duckAnimation,
      pic: ContactCard,
      speed: 1
    }
  ]
  
  const [isIntro, setIsIntro] = useState(true);
  const [category, setCategory] = useState();
  const [speed, setSpeed] = useState(1);
  const [animComplete, setAnimComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [contents, setContents] = useState(10);

  useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, [])

  const bgChange = (animNum) => {
    play();
    setIsIntro(false);
    setAnimComplete(false);
    setShowContent(false);
    setContents(animNum);
    setCategory(cards[animNum].animation)
    setSpeed(cards[animNum].speed)
  }

  const fadeBG = (event) => {
    if(event == 'complete') {
    setTimeout(() => {
      setShowContent(true);
    }, 1000)
    setAnimComplete(true);
  }
}

  const contentPicker = () => {
    switch(contents){
      case 0: 
        return <About />
      case 1:
        return <Projects />
      case 2:
        return <Contact />
        break;
    }
  }

  return (
    <div id='Site'>
      <div id='AnimBGContainer' className={`${animComplete ? 'fuzzed' : 'normal'}`}>
        <div id='AnimBG'>
          <Player src={category} autoplay keepLastFrame onEvent={fadeBG} speed={speed}/>
        </div>
      </div>
      {cards.map((card, index) => (
        <Card key={card.id} id={card.id} index={index} pic={card.pic} bgChange={bgChange} selected={contents} isIntro={isIntro} />
      ))}
      <Title />
      {isIntro && <div id='IntroPrompt'><h3 id='IntroPromptText' className='bounce'>Pick a card!</h3></div>}
      {showContent && contentPicker()}
    </div>
  );
}

export default App;
