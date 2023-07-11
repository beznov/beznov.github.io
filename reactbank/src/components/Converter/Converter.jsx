import React, { useState, useEffect } from 'react';
import c from "./Converter.module.css";
import fetchPrice from '../fetch.js';
import USD from '../../img/USD.png';
import EUR from '../../img/EUR.png';

function Converter() {

    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPrice();
            setCurrencies(data);
        };
        fetchData();
    }, []);

    const switchCurrency = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        calculateExchange(fromCurrency, toCurrency, fromValue);
    }

    useEffect(() => {
        calculateExchange(fromCurrency, toCurrency, fromValue);
      }, [fromCurrency, toCurrency]);

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    };

    const handleFromValueChange = (event) => {
        const input = event.target.value.replace(/[^0-9.]/g, "");
        setFromValue(input);
        calculateExchange(fromCurrency, toCurrency, input);
    };

    const calculateExchange = (from, to, value) => {
        if (from && to && value) {
            const exchangeValue = (value * fromCurrency) / toCurrency;
            setToValue(exchangeValue.toFixed(2));
        }
    };

    const usdCurrency = currencies.find(currency => currency.cc === "USD");
    const eurCurrency = currencies.find(currency => currency.cc === "EUR");

    return (
        <><div className={c.commoncurrencies}>
            {usdCurrency && eurCurrency && (
            <>
            <img src={USD} />
            <span>{usdCurrency.rate.toFixed(2)}</span>
            <img src={EUR} />
            <span>{eurCurrency.rate.toFixed(2)}</span>
            </>
        )}
        </div>
        <div className={c.wrapper}>
            <div className={c.selectArea}>
                <select className={c.select} value={fromCurrency} onChange={handleFromCurrencyChange}>
                    <option value="">Оберіть валюту</option>
                    <option value="1.0000">Українська гривня (UAH)</option>
                    {currencies.map((currency, index) => (
                        <option key={index} value={currency.rate}>{currency.txt + " (" + currency.cc + ")"}</option>
                    ))}
                </select>
                <input type="text" className={c.input} value={fromValue} onChange={handleFromValueChange} maxLength="9" placeholder="Значення" />
            </div>
            <button className={c.button} onClick={switchCurrency}>&#8645;</button>
            <div className={c.selectArea}>
                <select className={c.select} value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value="">Оберіть валюту</option>
                    <option value="1.0000">Українська гривня (UAH)</option>
                    {currencies.map((currency, index) => (
                        <option key={index} value={currency.rate}>{currency.txt + " (" + currency.cc + ")"}</option>
                    ))}
                </select>
                <input type="text" className={c.input} value={toValue} readOnly placeholder="Результат" />
            </div>
        </div></>
    )
}

export default Converter;
