import React from "react";
import c from '../styles/Currency.module.css';
import Converter from "../components/Converter/Converter";

function Currency() {
    return (
        <>
        <section className={c.currency}>
            <h1>REACTBANK ОБМІНЮЄ ВАЛЮТУ ЗГІДНО КУРСУ НАЦІОНАЛЬНОГО БАНКУ</h1>
            <Converter />
        </section>
        </>
    );
}


export default Currency;