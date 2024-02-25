import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

const Switch = (isDarkModeSwitch) => {
  const [toggle, setToggle] = useState(localStorage.getItem('theme') === 'dark' ? true : false);
  const [colorTheme, setTheme] = useDarkMode();
  const toggleClass = "transform translate-x-5";
  const handleClick = () => {
    isDarkModeSwitch.isDarkModeSwitch ? setTheme(colorTheme) : ''
    setToggle(!toggle);
  }

  return (
    <div
      className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-[#bcfb08] rounded-full p-1 cursor-pointer"
      onClick={() => {
        handleClick();
      }}
    >
      <div
        className={
          "bg-[#181f21] md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md duration-500 ease-in-out" +
          (toggle ? toggleClass : "")
        }
      ></div>
    </div>
  );
};

export default Switch;
