import React from "react";
import classes from "./List.module.css"

function List(props) {
    return (
    <div className={classes.container}>
        <div className={classes.item}>
            <img src={props.list.img} className={classes.img} alt="NFT" />
            <div className={classes.item_wrapper}>
                <div className={classes.name}>
                    {props.list.name}
                </div>
                <div className={classes.item_info}>
                    <div className={classes.item_text}>OWNERS:<br />{props.list.owners}</div>
                    <div className={classes.item_text}>PRICE:<br />{props.list.price} ETH</div>
                </div>
                <div className={classes.buttons}>
                    <button className={classes.button}>BUY</button>
                    <button className={classes.button}>SELL</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default List;