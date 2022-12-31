import React from "react";
import classes from './Header.module.css'
import DarkThemeButton from "../DarkThemeButton/DarkThemeButton";

function Header() {
    return (
        <header>
            <div className="header__container">
                <div className={classes.wrapper}>
                    <div id="aa" className={classes.logo}>
                        KRYPTO
                    </div>
                    <><DarkThemeButton /></>
                    <nav className={classes.nav__links}>
                        <a className={classes.nav__link}>
                            About
                        </a>
                        <a className={classes.nav__link}>
                            Pricing
                        </a>
                        <a className={classes.nav__link}>
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>

    )
}



export default Header;