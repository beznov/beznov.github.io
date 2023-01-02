import React from "react";
import classes from './Header.module.css'
import DarkThemeButton from "../DarkThemeButton/DarkThemeButton";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home"
import About from "../../pages/About";
import Pricing from "../../pages/Pricing";
import Contact from "../../pages/Contact";


function Header() {
    return (
        <><Router><header>
            <div className="header__container">
                <div className={classes.wrapper}>
                    <div id="aa" className={classes.logo}>
                        KRYPTO
                    </div>
                    <><DarkThemeButton /></>
                    <nav className={classes.nav__links}>
                        <Link to="/" className={classes.nav__link}>
                            Home
                        </Link>
                        <Link to="/about" className={classes.nav__link}>
                            About
                        </Link>
                        <Link to="/pricing" className={classes.nav__link}>
                            Pricing
                        </Link>
                        <Link to="/contact" className={classes.nav__link}>
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
        <main>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/pricing" element={<Pricing />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </main>
        </Router></>
    )
}


export default Header;