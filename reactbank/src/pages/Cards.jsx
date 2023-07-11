import React from "react";
import c from '../styles/Cards.module.css';
import nfc from '../img/nfc.png';
import chip from '../img/chip.png';
import visa from '../img/visa.png';

function Cards() {
    return (
        <div class="cards__container">
            <div className={c.cards_box}>
                <div className={c.card_box}>
                        <div className={c.cardbodybl}>
                            <span className={c.cardlogo}>REACTBANK</span>
                            <div className={c.chiparea}>
                                <img src={chip} />
                                <img src={nfc} />
                            </div>
                            <span className={c.cardnumber}>1234 1234 1234 1234</span>
                            <span className={c.cardexpires}>10/28</span>
                            <div className={c.cardholder}>
                                <span className={c.name}>YOUR NAME</span>
                                <img src={visa} />
                            </div>
                        </div>
                        <div className={c.cardbackbl}>
                            <span></span>
                            <span>123</span>
                        </div>
                    </div>
                <span className={c.text}>ЧОРНА КАРТКА</span>
                <div className={c.card_box}>
                        <div className={c.cardbodywh}>
                            <span className={c.cardlogo}>REACTBANK</span>
                            <div className={c.chiparea}>
                                <img src={chip} />
                                <img src={nfc} />
                            </div>
                            <span className={c.cardnumber}>1234 1234 1234 1234</span>
                            <span className={c.cardexpires}>10/28</span>
                            <div className={c.cardholder}>
                                <span className={c.name}>YOUR NAME</span>
                                <img src={visa} />
                            </div>
                        </div>
                        <div className={c.cardbackwh}>
                            <span></span>
                            <span>123</span>
                        </div>
                    </div>
                <span className={c.text}>БІЛА КАРТКА</span>
                <div className={c.card_box}>
                        <div className={c.cardbodyir}>
                            <span className={c.cardlogo}>REACTBANK</span>
                            <div className={c.chiparea}>
                                <img src={chip} />
                                <img src={nfc} />
                            </div>
                            <span className={c.cardnumber}>1234 1234 1234 1234</span>
                            <span className={c.cardexpires}>10/28</span>
                            <div className={c.cardholder}>
                                <span className={c.name}>YOUR NAME</span>
                                <img src={visa} />
                            </div>
                        </div>
                        <div className={c.cardbackir}>
                            <span></span>
                            <span>123</span>
                        </div>
                    </div>
                <span className={c.text}>МЕТАЛЕВА КАРТКА</span>
                <div className={c.card_box}>
                        <div className={c.cardbodyg}>
                            <span className={c.cardlogo}>REACTBANK</span>
                            <div className={c.chiparea}>
                                <img src={chip} />
                                <img src={nfc} />
                            </div>
                            <span className={c.cardnumber}>1234 1234 1234 1234</span>
                            <span className={c.cardexpires}>10/28</span>
                            <div className={c.cardholder}>
                                <span className={c.name}>YOUR NAME</span>
                                <img src={visa} />
                            </div>
                        </div>
                        <div className={c.cardbackg}>
                            <span></span>
                            <span>123</span>
                        </div>
                    </div>
                <span className={c.text}>ЗОЛОТА КАРТКА</span>
                <div className={c.card_box}>
                        <div className={c.cardbodyc}>
                            <span className={c.cardlogo}>REACTBANK</span>
                            <div className={c.chiparea}>
                                <img src={chip} />
                                <img src={nfc} />
                            </div>
                            <span className={c.cardnumber}>1234 1234 1234 1234</span>
                            <span className={c.cardexpires}>10/28</span>
                            <div className={c.cardholder}>
                                <span className={c.name}>YOUR NAME</span>
                                <img src={visa} />
                            </div>
                        </div>
                        <div className={c.cardbackc}>
                            <span></span>
                            <span>123</span>
                        </div>
                    </div>
                <span className={c.text}>ДИТЯЧА КАРТКА</span>
            </div>
        </div>
    );
}


export default Cards;