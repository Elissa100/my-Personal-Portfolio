
import React from 'react'
import "./Intro.css"
import instagram from './instagram.png'
import github from './github.png'
import linkedin from './linkedin.png'
import pic from '../../images/pic.PNG'
import vector1 from '../../images/Vector1.png'
import vector2 from '../../images/Vector2.png'
import glasses from '../../images/glasses.png'
import thumbup from '../../images/thumbup.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import crown from '../../images/crown.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

const transition = {duration : 2,type:'spring'}

  return (
    <div className='Intro' style={{color: darkMode? 'white':''}}>
      <div className="i-left">
        <div className="i-name">
        <span className='greet' 
        style={{color: darkMode ? 'white':''}}
        >Hey! I Am</span>
        <span className='names'>Elissa SIBOMANA</span>
        <span style={{color : darkMode?'white':'',fontSize: "1rem"}} className='span1'>Fullstack Developer with high level of experience in web designing and development,Producing the quality work</span>
        </div>
        <button className='button'>Hire me</button>
        <div className="i-icons">
          <a href="https://www.instagram.com/el_issa562/"><img src={instagram} alt='instagram' /></a>
          <a href="https://github.com/Elissa100?tab=repositories"><img src={github} alt='github' /></a> 
          <a href="https://www.linkedin.com/in/elissa-sibomana-204b36260/"><img src={linkedin} alt='LInkedin' /></a>
         </div>

      </div>
      <div className="i-right">
        <img src={vector1} alt="v1" id='vector' />
        <img src={vector2} alt="v2" id='vector' /> 
        <img src={pic} alt="me" id='me' /> 
        <motion.img src={glasses} alt="glasses" style={{ width: '30em', height: '30em' }}
        initial={{left:'-36%'}}
        whileInView={{left:'-14%'}}
        transition={transition}
        />
        <motion.div className="floating-div"
         initial={{ top: "-4%", left: "74%" }}
         whileInView={{ left: "38%" }}
        transition={transition}
        >
        <FloatingDiv image={crown} text1='Certified' text2='Backend web Developer' />
        </motion.div>
        <motion.div
        initial={{initial: '9rem',top:'18rem'}}
        whileInView={{left:'0rem'}}
        transition={transition}

        style={{top:"18rem",left:'10rem'}}
        >
          </motion.div>
          <motion.div
           initial={{initial: '49rem',top:'18rem'}}
           whileInView={{left:'4rem'}}
           transition={transition}
          >
          <FloatingDiv image={thumbup} text1='Good Frontend' text2='Web  dev' />
        </motion.div>
        <motion.div className="blur" style={{ background: "rgb(238 210 255)" }}>
      
        </motion.div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  )

}

export default Intro