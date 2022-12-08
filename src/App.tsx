import './App.css';
import Cube from './components/Cube';
import { useState, useEffect } from 'react';

import { Canvas } from '@react-three/fiber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather, faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin ,faTwitter} from '@fortawesome/free-brands-svg-icons';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined' ) {
      const val = localStorage.getItem('darkMode');
      return val ? JSON.parse(val) : false;
    }
    return true;
  })

  useEffect(() => {
    if (typeof window !== 'undefined' ) {
     localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode])

  const toggleMode = () => {
    setDarkMode(darkMode === false ? true : false);
  }
  
  if (darkMode) {
    document.documentElement.style.setProperty('--bgColor', "white")
    document.documentElement.style.setProperty('--bgColor2', "#f0f0f0")
    document.documentElement.style.setProperty('--accentColor', "black")
  } else {
    document.documentElement.style.setProperty('--bgColor', "black")
    document.documentElement.style.setProperty('--bgColor2', "#0c0c0c")
    document.documentElement.style.setProperty('--accentColor', "white")
  }

  return (
    <div className="app">
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Cube darkMode={darkMode} setDarkMode={setDarkMode}/>
      </Canvas>
      <div className="realName">gunner clark</div>
      <div className="userName">@theineptdev</div>
      {/* <div className="description">My name is Guner Clark. I'm a software developer</div> */}
      <div id="links">
        <a className="link" id="blog" href="https://theinept.blog/" target="_blank">
          <FontAwesomeIcon icon={faFeather} size="lg" />
          &nbsp;
          Blog
        </a>
        <a className="link" id="gitHub" href="https://github.com/theineptdev" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" />
          &nbsp;
          GitHub
        </a>
        <a className="link" id="twitter" href="https://twitter.com/theineptdev" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
          &nbsp;
          Twitter
        </a>
        <a className="link" id="linkedIn" href="https://www.linkedin.com/in/gunnerclark" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
          &nbsp;
          LinkedIn
        </a>
        <a className="link" id="mail" href="mailto:contact@gunnerclark.dev?subject=Website: [Your Subject]" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          &nbsp;
          Mail
        </a>
      </div>
      {/* <div className="darkToggleContainer" onClick={(event) => {setDarkMode(!darkMode)}}>
        <div className="darkToggle">
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
        </div>
      </div> */}
      <div className="themeToggleContainer" onClick={(event) => {toggleMode()}}>
        <div className="themeToggle">
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
        </div>
      </div>
    </div>
  );
}

export default App;
