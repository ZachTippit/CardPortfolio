import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Card from './Components/Card'
import Content from './Components/Content'
import Lottie from "lottie-react";
import compassAnimation from "./Lotties/compass.json";
import birdAnimation from './Lotties/bird.json'
import bottleAnimation from './Lotties/bottle.json'
import potionAnimation from './Lotties/potion.json'
import {default as Pic} from './blueeyes.jpg'
import './App.css';

function App() {
  const animations = [compassAnimation, potionAnimation, bottleAnimation];
  const cards = [
    {
      id: 'About',
      animation: compassAnimation,
      pic: Pic
    },
    {
      id: 'Projects',
      animation: potionAnimation,
      pic: Pic
    },
    {
      id: 'Contact',
      animation: bottleAnimation,
      pic: Pic
    }
  ]
  const [category, setCategory] = useState(animations[2]);
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

  return (
    <div id='Site'>
      <div id='AnimBGContainer' className={`${animComplete ? 'fuzzed' : 'normal'}`}>
        <div id='AnimBG'>
          <Lottie animationData={category} loop='false' onComplete={fadeBG}/>
        </div>
      </div>
      {cards.map((card, index) => (
        <Card id={card.id} index={index} pic={card.pic} bgChange={bgChange}/>
      ))}
      {showContent && <Content pageToDisplay={contents} />}
    </div>
  );
}

export default App;
