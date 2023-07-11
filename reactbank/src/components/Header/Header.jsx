import React from "react";
import c from './Header.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Cards from "../../pages/Cards";
import Deposit from "../../pages/Deposit";
import Currency from "../../pages/Currency";

function Header() {
    return (
        <><Router><header>
            <Link to="/" className={c.logo}>REACTBANK</Link>
            <nav className={c.nav_links}>
                <Link to="/cards" className={c.nav_link}>КАРТКИ</Link>
                <Link to="/deposit" className={c.nav_link}>ДЕПОЗИТ</Link>
                <Link to="/currency" className={c.nav_link}>КУРС ВАЛЮТ</Link>
            </nav>
        </header>
        <main>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cards" element={<Cards />} />
                <Route exact path="/deposit" element={<Deposit />} />
                <Route exact path="/currency" element={<Currency />} />
            </Routes>
        </main>
        </Router></>
    );
}


export default Header;