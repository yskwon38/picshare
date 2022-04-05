import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(
    () => {
      const root = window.document.documentElement;
      console.log(root);
      root.classList.remove(colorTheme);
      root.classList.add(theme);
    },
    [theme],
    colorTheme
  );
  return [colorTheme, setTheme];
};
