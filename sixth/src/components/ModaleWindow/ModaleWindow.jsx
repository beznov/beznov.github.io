import React, { useState } from "react";
import Modal from 'react-modal';
import classes from "./ModaleWindow.module.css";

function ModaleWindow() {

    const [IsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <div>
        <button className={classes.button} onClick={openModal}>Why You Can Contact Us?</button>
        <Modal
            className={classes.window}
            isOpen={IsOpen}
            onRequestClose={closeModal}
        >
        <div className={classes.wrapper}>
            <div className={classes.title}>
                Why you can contact us?
            </div>
            <ul className={classes.list}>
                <li className={classes.item}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className={classes.item}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex ipsa eos hic dolore suscipit odit nam! Quibusdam quod ex inventore, qui unde eum fugit repudiandae cupiditate tempora consequatur temporibus!
                </li>
                <li className={classes.item}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className={classes.item}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
            </ul>
            <button className={classes.button} onClick={closeModal}>OK</button>
        </div>
        </Modal>
      </div>
    )
}

export default ModaleWindow;