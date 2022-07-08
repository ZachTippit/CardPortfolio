import React, { useEffect, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import {default as ProjCard} from '../Img/ProjScrollCard.png'
import {default as ArrowR} from '../Img/ArrowR.png'
import {default as ArrowL} from '../Img/ArrowL.png'
import {default as Picodia} from '../Img/Projects/picodia.png'
import {default as Portfolio1} from '../Img/Projects/portfolio1.png';
import {default as Portfolio2} from '../Img/Projects/portfolio2.png';
import {default as PropTerra} from '../Img/Projects/propterra.png';
import {default as ParPo} from '../Img/Projects/parpo.png';
import {default as Gabbie} from '../Img/Projects/gabbie.png';
import {default as Hanscycle} from '../Img/Projects/hanscycle.png';
import '../carousel.scss';

const projects = [
    {
        pic: Picodia,
        link: 'https://picodia.app/'
    },
    {
        pic: Portfolio2,
        link: 'https://waitbutzach.netlify.app/'
    },
    {
        pic: Gabbie,
        link: 'https://zacharytippit.wixsite.com/gabbie4swcd3'
    },
    {
        pic: PropTerra,
        link: 'https://www.propterra.io/'
    },
    {
        pic: ParPo,
        link: 'https://parpo.netlify.app/'
    },
    {
        pic: Portfolio1,
        link: 'https://zachsoldportfolio.netlify.app/'
    },
    {
        pic: Hanscycle,
        link: 'https://web1.eng.famu.fsu.edu/me/senior_design/2016/team20/futureplans.html'
    }
]

const Project = ({key, level, pic, link}) => {
    const className = 'item level' + level;
    
    const goIfActive = () => {
        if(level === 0){
            window.open(link, '_blank');
        }
    }

    return(
        <div className={className}
            style={{
                backgroundImage: `url(${pic})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
            onClick={goIfActive}
            >
        </div>
    )
}

const Projects = () => {
    const [active, setActive] = useState(0);
    const [items, setItems] = useState([0,1,2,3,4,5,6]);
    const [direction, setDirection] = useState()

    const generateItems = () => {
        var itemList = []
        var level
        // console.log(items.length)
        for (var i = active - 2; i < active + 3; i++) {
            var index = i
            if (i < 0) {
                index = items.length + i
            } else if (i >= items.length) {
                index = i % items.length
            }
            level = active - i
            itemList.push(<Project key={index} id={items[index]} level={level} pic={projects[index].pic} link={projects[index].link} />)
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
    
    // useEffect(() => {
    //     console.log(items.length)
    // }, [items])

  return (
    <div id="carousel" className="noselect slide-in-fwd-bottom">
        <div className="arrow arrow-left" onClick={() => moveLeft()}><img className='grow' style={{width: '150%'}} src={ArrowL} /></div>
        <TransitionGroup transitionname={direction}>
            {generateItems()}
        </TransitionGroup>
        <div className="arrow arrow-right" onClick={() => moveRight()}><img className='grow' style={{width: '150%'}} src={ArrowR} /></div>
    </div>
  )
}

export default Projects