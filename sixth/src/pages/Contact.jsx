import React from "react";
import classes from "../styles/Contact.module.css";
import img from "../img/contact.webp";
import ModaleWindow from "../components/ModaleWindow/ModaleWindow.jsx";

function Contact() {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                <div className={classes.contact}>
                    <div className={classes.title}>
                        Contact Us:
                    </div>
                    <div className={classes.info}>
                        example@gmail.com
                    </div>
                    <div className={classes.info}>
                        +1(999)999999999
                    </div>
                <div className={classes.button}>
                    <ModaleWindow />
                </div>
                </div>
                <img src={img} className={classes.img} alt="Contact" />
                </div>
            </div>
        </div>
    )
}

export default Contact;