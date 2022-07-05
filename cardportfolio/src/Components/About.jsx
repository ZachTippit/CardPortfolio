import React from 'react'
import { Button, Grid } from '@mui/material'
import {default as Me} from '../Img/mthood.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Content = ({pageToDisplay}) => {
  return (
    <div id='Content'>
        <div id='ContentTextContainer'>
            <Grid container>
                <Grid item xs={12} justifyContent='center'>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img id='Me' src={Me} style={{borderRadius: '50%', }} alt="It's me! Zach" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <h3>Hi, I'm Zach</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed assumenda ipsa voluptate adipisci eaque minima possimus accusantium, dolor officia atque nam deserunt, facere doloremque qui. Voluptatibus quibusdam expedita quam.</p>
                </Grid>
                <Grid item xs={6}>
                    <Button variant='contained'>Resume</Button>
                </Grid>
                <Grid item xs>
                    <InstagramIcon fontSize='large' onClick={() => window.open('https://www.instagram.com/zach_tippit/', '_blank')}  />
                </Grid>
                <Grid item xs>
                  <LinkedInIcon fontSize='large' onClick={() => window.open('https://www.linkedin.com/in/zachtippit/', '_blank')}/>
                </Grid>
                <Grid item xs>
                  <GitHubIcon fontSize='large' onClick={() => window.open('https://github.com/ZachTippit', '_blank')}/>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Content