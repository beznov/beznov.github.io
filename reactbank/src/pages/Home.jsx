import React from "react";
import c from '../styles/Home.module.css';
import phone1 from '../img/phone1.png';
import phone2 from '../img/phone2.png';
import phone3 from '../img/phone3.png';
import app1 from '../img/app1.png';
import app2 from '../img/app2.png';
import nfc from '../img/nfc.png';
import chip from '../img/chip.png';
import visa from '../img/visa.png';

function Home() {
    return (
           <><section className={c.app}>
                <div className={c.phone}>
                    <div className={c.top}>
                        <span className={c.toptitle}>Операції з рахунком</span>
                        <span className={c.balance}>44 900₴</span>
                        <div className={c.buttongroup}>
                            <span><img src={phone1} /></span>
                            <span><img src={phone2} /></span>
                            <span><img src={phone3} /></span>
                        </div>
                    </div>
                    <div className={c.bottom}>
                        <div className={c.operation}>
                            <div className={c.operationname}>
                                <span>Comfy</span>
                                <span>Побутова техніка</span>
                            </div>
                            <span className={c.operationcost}>-500</span>
                        </div>
                        <div className={c.operation}>
                            <div className={c.operationname}>
                                <span>АТБ</span>
                                <span>Продукти</span>
                            </div>
                            <span className={c.operationcost}>-200</span>
                        </div>
                        <div className={c.operation}>
                            <div className={c.operationname}>
                                <span>ЕПІЦЕНТР</span>
                                <span>Будматеріали</span>
                            </div>
                            <span className={c.operationcost}>-1500</span>
                        </div>
                        <div className={c.operation}>
                            <div className={c.operationname}>
                                <span>Сільпо</span>
                                <span>Продукти</span>
                            </div>
                            <span className={c.operationcost}>-400</span>
                        </div>
                    </div>
                </div>
                <div className={c.apptitle}>
                    <h1>ХОЧЕШ ЛЕГКО КЕРУВАТИ СВОЇМИ ГРОШИМА?<br /> ЗАВАНТАЖУЙ REACTBANK APP!</h1>
                    <div className={c.badges}>
                        <img src={app1} />
                        <img src={app2} />
                    </div>
                </div>
            </section>
            <section className={c.about}>
                <div className={c.about_box}>
                    <h2>Відтепер замовити картку <br /> можна у декілька кліків!</h2>
                    <span>Завантажте додаток нашого банку, передайте нам фото документів і картка майже у Вас!</span>
                    <a href="/">Дізнатись більше</a>
                </div>
            </section>
            <section className={c.table}>
                <table>
                    <tr>
                        <th></th>
                        <th>REACTBANK</th>
                        <th>БАНК 1</th>
                        <th>БАНК 2</th>
                    </tr>
                    <tr>
                        <td>Пільговий період</td>
                        <td>до 65 днів</td>
                        <td>до 55 днів</td>
                        <td>до 50 днів</td>
                    </tr>
                    <tr>
                        <td>Відсоткова ставка на місяць</td>
                        <td>3%</td>
                        <td>3.5%</td>
                        <td>4%</td>
                    </tr>
                    <tr>
                        <td>Зняття готівки</td>
                        <td>0.1%</td>
                        <td>1%</td>
                        <td>0.8%</td>
                    </tr>
                    <tr>
                        <td>Поповнення</td>
                        <td>Безкоштовно</td>
                        <td>Безкоштовно</td>
                        <td>Безкоштовно</td>
                    </tr>
                    <tr>
                        <td>Кешбек</td>
                        <td>До 25%</td>
                        <td>До 10%</td>
                        <td>До 5%</td>
                    </tr>
                </table>
            </section>
            <section className={c.card}>
                <h2>ПРИЄДНУЙСЯ ДО РЕАКТИВНИХ!</h2>
                <h3>БЕЗКОШТОВНО ОТРИМАЙ ЧОРНУ КАРТКУ НАШОГО БАНКУ</h3>
                <div className={c.cardbody}>
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
                <a href="/">ПРИЄДНАТИСЬ</a>
            </section>
            </>
    );
}


export default Home;