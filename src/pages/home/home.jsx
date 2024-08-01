import React from 'react';
import { useTheme } from '../../context/ThemContext';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/resume.txt';
import Fade from "react-reveal/Fade";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import './home.css'
const Home = () => {
  const { theme, setTheme} = useTheme();
  //handle theme
  const handleTheme=() =>{
    setTheme((prevState)=>
    (prevState === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
    <div className="container-fluid home-container" id="home">
      <div className="theme-btn" onClick={handleTheme}>
      {theme==='light' ? (<BsFillMoonStarsFill size={30} /> )
       : (<BsFillSunFill size={30} />)}
            </div>
      <div className="container home-content">
        <Fade right>
        <h2>Hi 👋 I'm a</h2>
        <h1>
        <Typewriter
          options={{
          strings: ["Frontend Developer !",
                     "Backend Developer !",
                     "Full Stack Developer !"
                   ],
          autoStart: true,
          loop: true,
          }}
        />
        </h1>
        </Fade>
        <Fade bottom>
        <div className="home-buttons">
          <a className='btn btn-hire'
          href='http://api.whatsapp.com/send?phone=1234567890'
         rel='noreferrer'
         target='_blank'
         > Hire Me</a>
          
          {/* <a className='btn btn-cv' href={Resume} download="priti.pdf" >My Resume</a> */}
        </div>
      </Fade>
      </div>
    </div>
    </>
  )
}

export default Home