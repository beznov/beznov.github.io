import React from "react";
import c from './Footer.module.css';

function Footer() {
    return (
        <footer>
            <div className="footer__container">
                <span className={c.footer_logo}>REACTBANK</span>
                <ul className={c.list}>
                    <li>Банк</li>
                    <li><a href="/">Про банк</a></li>
                    <li><a href="/">Кар'єра</a></li>
                    <li><a href="/">Контакти</a></li>
                    <li><a href="/">Правила та тарифи</a></li>
                </ul>
                <ul className={c.list}>
                    <li>Картки</li>
                    <li><a href="/">Чорна картка</a></li>
                    <li><a href="/">Біла картка</a></li>
                    <li><a href="/">Металева картка</a></li>
                    <li><a href="/">Золота картка</a></li>
                    <li><a href="/">Дитяча картка</a></li>
                </ul>
                <ul className={c.list}>
                    <li>Продукти</li>
                    <li><a href="/">Покупка частинами</a></li>
                    <li><a href="/">Розстрочка</a></li>
                    <li><a href="/">Міжнародні перекази</a></li>
                    <li><a href="/">ФОП</a></li>
                    <li><a href="/">Депозити</a></li>
                </ul>
            </div>
        </footer>
    );
}



export default Footer;