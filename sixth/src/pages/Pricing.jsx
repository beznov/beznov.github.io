import React, { useState } from "react";
import classes from "../styles/Pricing.module.css";
import List from "../components/List/List";
import bored from "../img/bored.webp";
import mutant from "../img/mutant.webp";
import azuki from "../img/azuki.webp";
import doodle from "../img/doodle.webp";
import pudgypenguins from "../img/pudgypenguins.webp";
import valhalla from "../img/valhalla.webp";

function Pricing() {

    const [items, setItems] = useState([
        { id: 1, name: 'Bored Ape Yacht Club', img: bored, price: '85.99', owners: '117'},
        { id: 2, name: 'Mutant Ape Yacht Club', img: mutant, price: '19.57', owners: '145'},
        { id: 3, name: 'Azuki', img: azuki, price: '155.89', owners: '83'},
        { id: 4, name: 'Doodle', img: doodle, price: '88.27', owners: '105'},
        { id: 5, name: 'Pudgy Penguins', img: pudgypenguins, price: '74.55', owners: '98'},
        { id: 6, name: 'Valhalla', img: valhalla, price: '68.93', owners: '233'}
    ])

    const [sortByNameButton, setSortByNameButton] = useState(classes.button)
    const [sortByPriceButton, setSortByPriceButton] = useState(classes.button)
    const [sortByOwnersButton, setSortByOwnersButton] = useState(classes.button)


    const sortByName = () => {
        const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
        setItems(sortedItems);
        setSortByNameButton(classes.selected_button);
        setSortByPriceButton(classes.button);
        setSortByOwnersButton(classes.button);
    }

    const sortByPrice = () => {
        const sortedItems = [...items].sort((a, b) => a.price - b.price);
        setItems(sortedItems);
        setSortByPriceButton(classes.selected_button);
        setSortByNameButton(classes.button);
        setSortByOwnersButton(classes.button);
    }

    const sortByOwners = () => {
        const sortedItems = [...items].sort((a, b) => a.owners - b.owners);
        setItems(sortedItems);
        setSortByOwnersButton(classes.selected_button);
        setSortByNameButton(classes.button);
        setSortByPriceButton(classes.button);
    }

    return (
        <div className={classes.container}>
            <div className={classes.buttons}>
                <div className={classes.buttons_label}>Sort by:</div>
                <button className={sortByNameButton} onClick={sortByName}>Name</button>
                <button className={sortByPriceButton} onClick={sortByPrice}>Price</button>
                <button className={sortByOwnersButton} onClick={sortByOwners}>Owners</button>
            </div>
            {items.map(item =>
                <List list={item} key={item.id} />
            )}
        </div>
    )
}

export default Pricing;