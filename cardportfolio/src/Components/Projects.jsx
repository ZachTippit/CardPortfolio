import React, { useEffect, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import {default as ProjCard} from '../Img/ProjScrollCard.png'
import {default as ArrowR} from '../Img/ArrowR.png'
import {default as ArrowL} from '../Img/ArrowL.png'
import '../carousel.scss';

const Project = ({key, id, level}) => {
    const className = 'item level' + level;
    
    return(
        <div className={className}
            style={{
                backgroundImage: `url(${ProjCard})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
            >
                <p>{key}</p>
        </div>
    )
}

const Projects = () => {
    const [active, setActive] = useState(0);
    const [items, setItems] = useState([1,2,3,4,5,6,7,8,9]);
    const [direction, setDirection] = useState()

    const generateItems = () => {
        var itemList = []
        var level
        console.log(items.length)
        for (var i = active - 2; i < active + 3; i++) {
            var index = i
            if (i < 0) {
                index = items.length + i
            } else if (i >= items.length) {
                index = i % items.length
            }
            level = active - i
            console.log('Level: ', i, active, level, ' Index: ', index);
            itemList.push(<Project key={index} id={items[index]} level={level} />)
        }
        return itemList
    }
    
    const moveLeft = () => {
        var newActive = active
        newActive--
        setActive(newActive < 0 ? items.length - 1 : newActive);
        setDirection('left');
    }
    
    const moveRight = () => {
        var newActive = active
        setActive((newActive + 1) % items.length)
        setDirection('right');
    }

    // useEffect(() => {
    //     console.log(active)
    // }, [active])
    
    useEffect(() => {
        console.log(items.length)
    }, [items])

  return (
    <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={() => moveLeft()}><img className='grow' style={{width: '150%'}} src={ArrowL} /></div>
        <TransitionGroup transitionname={direction}>
            {generateItems()}
        </TransitionGroup>
        <div className="arrow arrow-right" onClick={() => moveRight()}><img className='grow' style={{width: '150%'}} src={ArrowR} /></div>
    </div>
  )
}

export default Projects