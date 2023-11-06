
import './Works.css'
import upwork from '../../images/Upwork.png'
import amazon from '../../images/amazon.png'
import fiver from '../../images/fiverr.png'
import shopify from '../../images/Shopify.png'
import facebook from '../../images/Facebook.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from "framer-motion";

import React from 'react'

const Works = () => {
  const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    
    <div className="works" style={{ color:darkMode?'white':'' }}>
    <div className="awesome">
        <span>Works for :</span>
        <span>Companies</span>
        <span>I Develop frontend of websites<br/>Also The backend</span>
  <button className="button s-button">Hire me</button>
        
        <div className="blur s-blur1" 
        style={{background: "#ABF1FF94"}}
        id="s-blur1"></div>
      </div>
      <div className="w-right">
        <motion.div
         initial={{ rotate: 45 }}
         whileInView={{ rotate: 0 }}
         viewport={{ margin: "-40px" }}
         transition={{ duration: 3.5, type: "spring" }}
         className="w-mainCircle"
         >
            <div className="w-secCircle">
            <img src={upwork} alt="upwork" />
            </div>
            <div className="w-secCircle">
            <img src={fiver} alt="fiverr" />
            </div>
            <div className="w-secCircle">
            <img src={amazon} alt="amazon" />
            </div>
        
            <div className="w-secCircle">
            <img src={shopify} alt="shopify" />
            </div>
            <div className="w-secCircle">
            <img src={facebook} alt="facebook" />
            </div>

        </motion.div>
        <div className="w-backCircle blueCircle">

        </div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
    
  )
}

export default Works
