import React, { useState } from "react";
import classes from "./EmailForm.module.css";

function EmailForm() {

    const [email, setEmail] = useState("");
    const [emailColor, setEmailColor] = useState(classes.input_email);
    const [formValid, setFormValid] = useState(false);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailColor(classes.incorrect);
            setFormValid(false);
        } else {
            setEmailColor(classes.correct);
            setFormValid(true);
        }
        if (e.target.value.length === 0) {
            setEmailColor(classes.input_email);
            setFormValid(false);
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.label}>
                Join Our Newsletter
            </div>
            <form>
                <div className={classes.frm}>
                <input value={email} onChange={e => emailHandler(e)} name="email" type="text" className={emailColor} placeholder="Email Address" />
                <button disabled={!formValid} type="submit" className={classes.button}>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default EmailForm;