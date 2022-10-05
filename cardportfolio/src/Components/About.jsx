import { Button, Grid } from '@mui/material'
import {default as Me} from '../Img/mthood.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Resume from '../zdt-resume.pdf'

import '../animations.css'

const About = () => {
  return (
    <div className='Content'>
        <div id='ContentTextContainer'>
            <Grid container>
                <Grid item xs={12} justifyContent='center' className='slide-in-fwd-center'>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img id='Me' src={Me} style={{borderRadius: '50%', }} alt="It's me! Zach" />
                    </div>
                </Grid>
                <Grid item xs={12} className='slide-in-fwd-bottom'>
                    <h3 id='AboutTitle'>Hi, I'm Zach</h3>
                    <p id='AboutText'>World-travelling engineer with a passion for storytelling, efficient operations and creative expression! Throw me at a problem and I will tirelessly pursue it for no other reason than curiosity.<br/><br/>Check out my projects -- let's connect!</p>
                </Grid>
                <Grid item xs={6} className='slide-in-fwd-bottom'>
                    <Button variant='contained' size='small' href={Resume} target="_blank">Resume</Button>
                </Grid>
                <Grid item xs className='slide-in-fwd-bottom'>
                    <InstagramIcon onClick={() => window.open('https://www.instagram.com/zach_tippit/', '_blank')}  />
                </Grid>
                <Grid item xs className='slide-in-fwd-bottom'>
                  <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/zachtippit/', '_blank')}/>
                </Grid>
                <Grid item xs className='slide-in-fwd-bottom'>
                  <GitHubIcon onClick={() => window.open('https://github.com/ZachTippit', '_blank')}/>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default About