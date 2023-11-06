import React from 'react'
import './Floating.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'


const FloatingDiv = ({image,text1,text2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="floatingdiv" style={{color: darkMode ? 'white':'black'}}>
   <img src={image} alt="crown" />
    <span>
        {text1}
        <br/>
        {text2}
        
    </span>
    </div>
  )
}

export default FloatingDiv
