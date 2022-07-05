import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Card from './Components/Card'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Title from './Components/Title'
import Lottie from "lottie-react";
import compassAnimation from "./Lotties/compass.json";
import birdAnimation from './Lotties/bird.json'
import bottleAnimation from './Lotties/bottle.json'
import potionAnimation from './Lotties/potion.json'
import {default as AboutCard} from './Img/AboutCard.png'
import {default as ProjectsCard} from './Img/ProjectsCard.png'
import {default as ContactCard} from './Img/ContactCard.png'
import {default as Pic} from './Img/blueeyes.jpg'
import './App.css';

function App() {
  const cards = [
    {
      id: 'About',
      animation: compassAnimation,
      pic: AboutCard
    },
    {
      id: 'Projects',
      animation: potionAnimation,
      pic: ProjectsCard
    },
    {
      id: 'Contact',
      animation: bottleAnimation,
      pic: ContactCard
    }
  ]
  const [category, setCategory] = useState();
  const [animComplete, setAnimComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [contents, setContents] = useState(10);

  const bgChange = (animNum) => {
    setAnimComplete(false);
    setShowContent(false);
    setContents(animNum);
    setCategory(cards[animNum].animation)
  }

  const fadeBG = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000)
    setAnimComplete(true);
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
          <Lottie animationData={category} loop='false' onComplete={fadeBG}/>
        </div>
      </div>
      {cards.map((card, index) => (
        <Card id={card.id} index={index} pic={card.pic} bgChange={bgChange} selected={contents}/>
      ))}
      <Title />
      {showContent && contentPicker()}
    </div>
  );
}

export default App;