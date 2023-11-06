import React from 'react'
import humble from '../../images/humble.png'
import './Services.css'
import heartemoji from '../../images/heartemoji.png'
import glasses from '../../images/glasses.png'
import Card from '../Card/Card'
import resume from '../../images/cv.pdf'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring",};
  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
        I am a software Developer with
          <br />
        skills in both backend and Frontend sides  
        </span>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={heartemoji}
            heading={"Design"}
            detail={"I also Know to design with figma "}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={glasses}
            heading={"Frontend Developer"}
            detail={"Html, Css, JavaScript, Reactjs,php"}
          />
        </motion.div>
        
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={humble}
            heading={"Backend Dev with skills in "}
            detail={
              "Nodejs,Expressjs,Python,Java,c++,c"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;