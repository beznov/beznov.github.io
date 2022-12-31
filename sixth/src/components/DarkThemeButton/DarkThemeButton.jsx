import React, { useState, useEffect } from "react";
import classes from './DarkThemeButton.module.css'

function DarkThemeButton() {
    
    const [buttonText, setButtonText] = useState("Dark Mode");
    const changeButtonText = () => {
        if (buttonText === "Dark Mode") {
            setButtonText("Light Mode");
        } else {
            setButtonText("Dark Mode");
        }
    };

    const [buttonClass, setButtonClass] = useState(classes.dark_button);
    const changeButtonClass = () => {
        if (buttonClass === classes.dark_button) {
            setButtonClass(classes.light_button)
        } else {
            setButtonClass(classes.dark_button)
        }
    }
    
    const [theme, setTheme] = useState(classes.light);
    const toggleTheme = () => {
        if (theme === classes.light) {
            setTheme(classes.dark);
        } else {
          setTheme(classes.light);
        }
    };

      useEffect(() => {
        document.body.className = theme;
      }, [theme]);

      const Theme = () => {
        toggleTheme();
        changeButtonText();
        changeButtonClass();
      }

      return (
        <div className={theme}>
          <button className={buttonClass} onClick={Theme}>{buttonText}</button>
        </div> 
      )
    
}

export default DarkThemeButton;