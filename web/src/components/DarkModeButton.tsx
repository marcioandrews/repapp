import React, { useState } from "react";
import "../styles/components/DarkModeButton.css";
import Lottie from "react-lottie";
import DarkModeBtn from "../assets/lotties/darkmode-button.json"

const DarkMode = () => {
  const themeMode = {
    LIGHT: "light",
    DARK: "dark",
  }

  const [initial, setInitial] = useState([0, 170]);
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
  let theme: any;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  theme ? body.classList.add(theme) : body.classList.add("light")

  const switchTheme = (e: any) => {
    switch (theme) {

      case themeMode.DARK:
        body.classList.replace(themeMode.DARK, themeMode.LIGHT);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");
        theme = "light";
        setInitial([0, 170])
        setDirection(1)
        break;
      case themeMode.LIGHT:
        body.classList.replace(themeMode.LIGHT, themeMode.DARK);
        e.target.classList.add(clickedClass);
        localStorage.setItem("theme", "dark");
        theme = "dark";
        setInitial([0, 170])
        setDirection(-1)
        break;
    }
  };

  return (

    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}>
      <Lottie
        options={defaultOptions}
        height={55}
        width={"100%"}
        speed={3}
        direction={direction}
        isStopped={false}
        isPaused={false} />
    </button>
  );
};

export default DarkMode;