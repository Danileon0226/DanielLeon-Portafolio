import  { useState, useEffect } from "react";
import "./DarkMode.css"; // Asegúrate de crear este archivo CSS en la misma carpeta del componente

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="frame theme-toggle-btn">
      <i className={theme === "light" ? "ri-moon-line" : "ri-sun-line"}></i>
      {theme === "light" ? " Modo Oscuro" : " Modo Claro"}
    </button>
  );
};

export default DarkMode;
