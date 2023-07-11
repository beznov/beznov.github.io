import React, { useState, useEffect } from "react";
import Select from 'react-select';
import c from '../styles/Deposit.module.css';

function Deposit() {
  const [common, setCommon] = useState(true);
  const [bank, setBank] = useState(false);

  const [rangeValueCommon, setRangeValueCommon] = useState(1);
  const [inputValueCommon, setInputValueCommon] = useState(1000);
  const [selectValueCommon, setSelectValueCommon] = useState('Гривня');
  const [totalCommon, setTotalCommon] = useState(1);

  const [percentBeforeCommon, setPercentBeforeCommon] = useState(12);
  const [percentAfterCommon, setPercentAfterCommon] = useState(9.66);
  const [taxCommon, setTaxCommon] = useState(0);

  const [rangeValueBank, setRangeValueBank] = useState(1);
  const [inputValueBank, setInputValueBank] = useState(1000);
  const [selectValueBank, setSelectValueBank] = useState('Гривня');
  const [totalBank, setTotalBank] = useState(1);
  const [percentBank, setPercentBank] = useState(0.01);

  const options = [
    { value: 'Гривня', label: 'Гривня' },
    { value: 'Долар', label: 'Долар' },
    { value: 'Євро', label: 'Євро' }
  ];
  

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 250
    }),
    menu: (provided) => ({
      ...provided,
      width: 250
    })
  };

  const toggleCommon = () => {
    setCommon(true);
    setBank(false);
  };

  const toggleBank = () => {
    setBank(true);
    setCommon(false);
  };

  const getRangeValueCommon = (event) => {
    const value = Number(event.target.value);
    setRangeValueCommon(value > 12 ? value - 1 : value);
    resultCommon();
  }

  const getStep = (value) => {
    return value < 12 ? 1 : 3;
  }

  const getInputValueCommon = (event) => {
    const value = event.target.value;
    const regexp = /^\d*$/;
    if (regexp.test(value) && value <= 1000000) {
      setInputValueCommon(value);
    }
    resultCommon();
  }

  const getSelectValueCommon = (selectedOption) => {
    const value = selectedOption.value;
    setSelectValueCommon(value);
    resultCommon();
  }

  useEffect(() => {
    resultCommon();
  }, [inputValueCommon, selectValueCommon, rangeValueCommon])

  const resultCommon = () => {
    let val = Number(inputValueCommon);
    let percentBe = 0;
    let percentAf = 0;
    let months = Number(rangeValueCommon);
    if(selectValueCommon === 'Гривня') {
        if(rangeValueCommon < 6) {
            percentBe = 12;
            percentAf = 9.66;
        }
        else if(rangeValueCommon >= 6 && rangeValueCommon <= 8) {
            percentBe = 13;
            percentAf = 10.46;
        }
        else if(rangeValueCommon >= 9 && rangeValueCommon <= 11) {
            percentBe = 14;
            percentAf = 11.27;
        }
        else {
            percentBe = 16;
            percentAf = 12.88;
        }
    }
    if(selectValueCommon === 'Долар') {
        if(rangeValueCommon < 6) {
            percentBe = 0.1;
            percentAf = 0.08;
        }
        else if(rangeValueCommon >= 6 && rangeValueCommon <= 8) {
            percentBe = 1.6;
            percentAf = 1.29;
        }
        else if(rangeValueCommon >= 9 && rangeValueCommon <= 11) {
            percentBe = 2.1;
            percentAf = 1.69;
        }
        else {
            percentBe = 2.8;
            percentAf = 2.3;
        }
    }
    if(selectValueCommon === 'Євро') {
        if(rangeValueCommon < 6) {
            percentBe = 0.1;
            percentAf = 0.08;
        }
        else if(rangeValueCommon >= 6 && rangeValueCommon <= 8) {
            percentBe = 1.1;
            percentAf = 0.89;
        }
        else if(rangeValueCommon >= 9 && rangeValueCommon <= 11) {
            percentBe = 1.6;
            percentAf = 1.29;
        }
        else {
            percentBe = 2.3;
            percentAf = 1.9;
        }
    }
    setPercentBeforeCommon(percentBe);
    setPercentAfterCommon(percentAf);
    const totalAf = (val * Math.pow(1 + (percentAf / 100 / 12), months)).toFixed(2);
    const totalBe = (val * Math.pow(1 + (percentBe / 100 / 12), months)) - totalAf;
    setTotalCommon(totalAf);
    setTaxCommon(totalBe.toFixed(2));
  }

  const getRangeValueBank = (event) => {
    const value = Number(event.target.value);
    setRangeValueBank(value > 12 ? value - 1 : value);
    resultBank();
  }

  const getInputValueBank = (event) => {
    const value = event.target.value;
    const regexp = /^\d*$/;
    if (regexp.test(value) && value <= 1000000) {
      setInputValueBank(value);
    }
    resultBank();
  }

  const getSelectValueBank = (selectedOption) => {
    const value = selectedOption.value;
    setSelectValueBank(value);
    resultBank();
  }

  useEffect(() => {
    resultBank();
  }, [inputValueBank, selectValueBank, rangeValueBank])

  const resultBank = () => {
    let val = Number(inputValueBank);
    let percent = 0;
    let months = Number(rangeValueBank);
    if(selectValueBank === 'Гривня') {
        percent = 0.1;
    }
    if(selectValueBank === 'Долар' || selectValueBank === 'Євро') {
        percent = 0.001;
    }
    setPercentBank(percent);
    const total = val * Math.pow(1 + (percent / 100 / 12), months);
    setTotalBank(Number(total).toFixed(2));
  }


  return (
    <div class="deposit__container">
        <div className={c.buttons}>
            <button className={c.btn} onClick={toggleCommon} style={{ background: common === true ? 'rgb(232,123,224)' : 'none' }}>Стандартний</button>
            <button className={c.btn} onClick={toggleBank} style={{ background: bank === true ? 'rgb(232,123,224)' : 'none' }}>Банка</button>
        </div>

      {common && (
        <>
        <div className={c.wrapper}>
            <div className={c.options}>
            <label>Сума депозиту<br/>
                <input className={c.input}
                type="text"
                value={inputValueCommon}
                onChange={getInputValueCommon}
                />
            </label>
            <Select 
              options={options}
              value={selectValueCommon}
              defaultValue={options[0]}
              onChange={getSelectValueCommon}
              styles={customStyles}
              placeholder={selectValueCommon}
            />
            <label>Термін: {rangeValueCommon} міс.<br/>
            <input
                type="range"
                min={1}
                max={25}
                step={getStep(rangeValueCommon)}
                value={rangeValueCommon}
                onChange={getRangeValueCommon}
                />
                </label>
            </div>
            <div className={c.resultCommon}>
                <span>Ви отримаєте<br/><b>{totalCommon}</b>{selectValueCommon === 'Гривня' ? '₴' : selectValueCommon === 'Долар' ? '$' : '€'}</span>
                <span>Вклали<br/><b>{inputValueCommon}</b>{selectValueCommon === 'Гривня' ? '₴' : selectValueCommon === 'Долар' ? '$' : '€'}</span>
                <span>Процентна ставка<br/><b>{percentBeforeCommon}%</b></span>
                <span>Процентна ставка після сплати податків<br/><b>{percentAfterCommon}%</b></span>
                <span>Утримано податку<br/><b>{taxCommon}</b>{selectValueCommon === 'Гривня' ? '₴' : selectValueCommon === 'Долар' ? '$' : '€'}</span>
            </div>
        </div>
            </>
      )}

      {bank && (
        <div className={c.wrapper}>
            <div className={c.options}>
            <label>Сума депозиту<br/>
                <input className={c.input}
                type="text"
                value={inputValueBank}
                onChange={getInputValueBank}
                />
            </label>
            <Select 
              options={options}
              value={selectValueBank}
              defaultValue={options[0]}
              onChange={getSelectValueBank}
              styles={customStyles}
              placeholder={selectValueBank}
            />
            <label>Термін: {rangeValueBank} міс.<br/>
            <input
                type="range"
                min={1}
                max={25}
                step={getStep(rangeValueBank)}
                value={rangeValueBank}
                onChange={getRangeValueBank}
                />
                </label>
            </div>
            <div className={c.resultCommon}>
                <span>Ви отримаєте<br/><b>{totalBank}</b>{selectValueBank === 'Гривня' ? '₴' : selectValueBank === 'Долар' ? '$' : '€'}</span>
                <span>Вклали<br/><b>{inputValueBank}</b>{selectValueBank === 'Гривня' ? '₴' : selectValueBank === 'Долар' ? '$' : '€'}</span>
                <span>Процентна ставка<br/><b>{percentBank}%</b></span>
            </div>
        </div>
      )}
    </div>
  );
};


export default Deposit;