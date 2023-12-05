import React, { useState } from 'react';
import './Darkmodebtn.css'

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      document.body.style.background = prevMode 
        ? 'linear-gradient(to right, white, blue)' 
        : 'linear-gradient(to right, #00008d, black)';
      document.body.style.color = prevMode ? 'black' : 'white';
      document.body.style.animation = prevMode ? 'dissolveToLight 0.5s' : 'dissolveToDark 0.5s';
      document.body.style.animationFillMode = 'forwards';
      return !prevMode;
    });
  };


  return (
    <div className='darkmodebtn'>
      <button 
      onClick={toggleDarkMode}>Toggle Dark/Light Mode</button>
    </div>
  );
}

export default DarkModeButton;
