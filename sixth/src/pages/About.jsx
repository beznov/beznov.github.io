import React from "react";
import classes from "../styles/About.module.css";
import img1 from "../img/about.webp";
import img2 from "../img/about2.webp";

function About() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.text_wrapper}>
                    <div className={classes.title}>
                        What Is KRYPTO?
                    </div>
                    <div className={classes.text}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In excepturi ad nam, aperiam ipsa incidunt omnis iste,
                            ducimus molestias voluptatem quibusdam laboriosam
                            totam commodi sunt! Vitae ipsa placeat quae aut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In excepturi ad nam, aperiam ipsa incidunt omnis iste,
                            ducimus molestias voluptatem quibusdam laboriosam
                            totam commodi sunt! Vitae ipsa placeat quae aut.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In excepturi ad nam, aperiam ipsa incidunt omnis iste,
                            ducimus molestias voluptatem quibusdam laboriosam
                            totam commodi sunt! Vitae ipsa placeat quae aut.
                        </p>
                    </div>
                </div>
                <div className={classes.content_wrapper}>
                    <img src={img1} className={classes.img} alt="BTC" />
                    <div className={classes.text_wrapper}>
                        <div className={classes.title}>
                            Why KRYPTO?
                        </div>
                        <div className={classes.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                            Et obcaecati alias error distinctio pariatur quis perferendis<br />
                            ab hic nihil quo, vero inventore voluptas?<br />
                            Ipsum omnis expedita voluptas corporis quaerat voluptate?<br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                            Et obcaecati alias error distinctio pariatur quis perferendis<br />
                            ab hic nihil quo, vero inventore voluptas?<br />
                            Ipsum omnis expedita voluptas corporis quaerat voluptate?
                        </div>
                    </div>
                </div>
                <div className={classes.content_wrapper}>
                    <div className={classes.text_wrapper}>
                        <div className={classes.title}>
                            How To Start?
                        </div>
                        <div className={classes.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                            Et obcaecati alias error distinctio pariatur quis perferendis<br />
                            ab hic nihil quo, vero inventore voluptas?<br />
                            Ipsum omnis expedita voluptas corporis quaerat voluptate?<br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                            Et obcaecati alias error distinctio pariatur quis perferendis<br />
                            ab hic nihil quo, vero inventore voluptas?<br />
                            Ipsum omnis expedita voluptas corporis quaerat voluptate?
                        </div>
                    </div>
                    <img src={img2} className={classes.img} alt="CODE" />
                </div>
            </div>
        </div>  
    )
}

export default About;