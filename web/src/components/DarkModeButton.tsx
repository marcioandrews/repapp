import React, { useState } from "react";
import "../styles/components/DarkModeButton.css";
import Lottie from "react-lottie";
import DarkModeBtn from "../assets/lotties/darkmode-button.json"

const DarkMode = () => {

  // const [animationState, setAnimationState] = useState({
  //   isStopped: false, isPaused: false,
  //   direction: -1,
  // });
  const [initial, setInitial] = useState([0, 170]);
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: DarkModeBtn,
    initialSegment: initial,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme:any;

  if (localStorage) {
    theme = localStorage.getItem("theme");
    
  }


  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
   

  }

  const switchTheme = (e:any) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setInitial([0, 170])
      setDirection(1)
      // setIsPaused(!true)
      // setIsStopped(true)
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      setInitial([0, 170])
      setDirection(-1)
      // setIsPaused(!true)
      // setIsStopped(true)

    }


  };

  return (

        <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e) }
        
        >
      <Lottie 
        options={defaultOptions}
        height={55}
        width={"100%"}
        speed={3}
        direction={ direction}
        isStopped={isStopped}
        isPaused={isPaused}
        
      />
     

        </button>
        );
};

export default DarkMode;