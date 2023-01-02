import React from "react";
import classes from "../styles/Home.module.css";
import discover_img from "../img/discover.png";
import featured1_img from "../img/featured1.png";
import featured2_img from "../img/featured2.png";
import featured3_img from "../img/featured3.png";
import featured4_img from "../img/featured4.png";

function Home() {
    return (
        <div className={classes.container}>
            <div className={classes.discover_wrapper}>
                <div className={classes.discover_text_and_buttons_wrapper}>
                    <div className={classes.discover_text_wrapper}>
                        <div className={classes.discover_title}>
                            discover<br />and collect<br />rare NFTs
                        </div>
                        <div className={classes.discover_subtitle}>
                            The most secure marketplace for buying<br />and selling unique crypto assets.
                        </div>
                    </div>
                    <div className={classes.discover_buttons}>   
                    <a href="/" className={classes.button}>BUY NFTS</a>
                    <a href="/" className={classes.button}>SELL NFTS</a>
                    </div>
                </div>
                <img src={discover_img} className={classes.discover_img} alt="Discover" />
            </div>

            <div className={classes.featured_wrapper}>
                <div className={classes.featured_title}>
                    FEATURED ON
                </div>
                <div className={classes.featured_imgs}>
                    <img src={featured1_img} className={classes.featured_img1} alt="Featured1" />
                    <img src={featured2_img} className={classes.featured_img2} alt="Featured2" />
                    <img src={featured3_img} className={classes.featured_img3} alt="Featured3" />
                    <img src={featured4_img} className={classes.featured_img4} alt="Featured4" />
                </div>
            </div>




















        </div>
    )
}

export default Home;