import React from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
