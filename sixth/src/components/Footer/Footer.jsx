import React from "react";
import classes from './Footer.module.css'
import EmailForm from "../EmailForm/EmailForm";

function Footer() {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.logo}>
                    KRYPTO
                </div>
                <div className={classes.column}>
                    <div className={classes.label}>
                        Krypto
                    </div>
                    <div className={classes.links}>
                        <a href="/" className={classes.link}>Home</a>
                        <a href="/about" className={classes.link}>About</a>
                        <a href="/" className={classes.link}>Buy NFTs</a>
                        <a href="/" className={classes.link}>Sell NFTs</a>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.label}>
                        Market
                    </div>
                    <div className={classes.links}>
                        <a href="/" className={classes.link}>Browse NFTs</a>
                        <a href="/" className={classes.link}>Buy NFTs</a>
                        <a href="/" className={classes.link}>Sell NFTs</a>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.label}>
                        Contact
                    </div>
                    <div className={classes.links}>
                        <a href="/" className={classes.link}>Email</a>
                        <a href="/" className={classes.link}>LinkedIn</a>
                        <a href="/" className={classes.link}>Instagram</a>
                        <a href="/" className={classes.link}>Twitter</a>
                    </div>
                </div>
                <EmailForm />
            </div>
        </div>
    )
}



export default Footer;