import React from "react";
import classes from "../styles/Home.module.css";
import discover_img from "../img/discover.png";
import featured1_img from "../img/featured1.png";
import featured2_img from "../img/featured2.png";
import featured3_img from "../img/featured3.png";
import featured4_img from "../img/featured4.png";
import analytics_img from "../img/analytics.png";
import getourapp_img from "../img/getourapp.png";
import testimonials_img from "../img/testimonials.png";

function Home() {
    return (
        <div className={classes.container}>
            {/* DISCOVER */}
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
            {/* FEATURED */}
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
            {/* ANALYTICS */}
            <div className={classes.analytics_wrapper}>
                <img src={analytics_img} className={classes.analytics_img} alt="Analytics" />
                <div className={classes.analytics_text_and_button}>
                    <div className={classes.analytics_text}>
                        <div className={classes.main_title}>
                            ANALYTICS
                        </div>
                        <div className={classes.title}>
                            built-in analytics<br />to track your nfts
                        </div>
                        <div className={classes.subtitle}>
                            Use our built-in analytics dashboard to pull valuable<br />
                            insights and monitor the value of your Krypto portfolio<br />over time. 
                        </div>
                    </div>
                    <div><a href="/" className={classes.button}>VIEW OUR PRICING</a></div>
                </div>
            </div>      
            {/* GET OUR APP */}
            <div className={classes.getourapp_wrapper}>
                <div className={classes.getourapp_text_and_button}>
                    <div className={classes.getourapp_text}>
                        <div className={classes.main_title}>
                            GET OUR APP
                        </div>
                        <div className={classes.title}>
                            browse nfts from<br />your smartphone
                        </div>
                        <div className={classes.subtitle}>
                            Our Krypto app is the easiest way to keep track of your<br />assets when you`re on the go. 
                        </div>
                    </div>
                    <div><a href="/" className={classes.button}>DOWNLOAD ON IOS</a></div>
                </div>
                <img src={getourapp_img} className={classes.getourapp_img} alt="GET OUR APP" />
            </div>      
            {/* TESTIMONIALS */}
            <div className={classes.testimonials_wrapper}>
                <div className={classes.testimonials_text}>
                    <div className={classes.main_title}>
                        TESTIMONIALS
                    </div>
                    <div className={classes.title}>
                        read what others<br />have to say
                    </div>
                </div>
                <div className={classes.testimonials_cards}>
                    <div className={classes.testimonials_card}>
                        <img src={testimonials_img} className={classes.testimonials_img} alt="Testimonials" />
                        <div className={classes.testimonials_card_name}>
                            OLIVIA COLE
                        </div>
                        <div className={classes.testimonials_card_text}>
                            Lorem ipsum dolor sit<br />amet, consectetur<br />adipiscing elit. Nunc<br />
                            ullamcorper scelerisque<br />mi, in malesuada felis<br />malesuada vel.  
                        </div>
                    </div>
                    <div className={classes.testimonials_card}>
                        <img src={testimonials_img} className={classes.testimonials_img} alt="Testimonials" />
                        <div className={classes.testimonials_card_name}>
                            OLIVIA COLE
                        </div>
                        <div className={classes.testimonials_card_text}>
                            Lorem ipsum dolor sit<br />amet, consectetur<br />adipiscing elit. Nunc<br />
                            ullamcorper scelerisque<br />mi, in malesuada felis<br />malesuada vel.  
                        </div>
                    </div>
                    <div className={classes.testimonials_card}>
                        <img src={testimonials_img} className={classes.testimonials_img} alt="Testimonials" />
                        <div className={classes.testimonials_card_name}>
                            OLIVIA COLE
                        </div>
                        <div className={classes.testimonials_card_text}>
                            Lorem ipsum dolor sit<br />amet, consectetur<br />adipiscing elit. Nunc<br />
                            ullamcorper scelerisque<br />mi, in malesuada felis<br />malesuada vel.  
                        </div>
                    </div>
                </div>
            </div>
            {/*GET STARTED*/}
            <div className={classes.getstarted_wrapper}>
                <div className={classes.getstarted_text}>
                    <div className={classes.getstarted_main_title}>
                        ARE YOU READY?
                    </div>
                    <div className={classes.getstarted_title}>
                        be a part of the<br />next big thing
                    </div>
                </div>
                <div><a href="/" className={classes.getstarted_button}>GET STARTED</a></div>
            </div>
        </div>
    )
}

export default Home;