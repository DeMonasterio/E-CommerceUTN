import React, { useRef, useEffect } from 'react';
import "./Filters.css";

export default function Filters({
  RangeValue,
  setRangeValue,
  setMinToMaxPrice,
  setMaxToMinPrice,
  setAlphab,
  minToMaxPrice,
  maxToMinPrice,
  Alphab,
}) {
  const checkboxes = {
    minToMaxPrice: useRef(null),
    maxToMinPrice: useRef(null),
    alphabeticOrder: useRef(null),
  };

  
  useEffect(() => {
    Object.keys(checkboxes).forEach((key) => {
      const checkboxRef = checkboxes[key];
      if (checkboxRef.current) {
        checkboxRef.current.checked = key === 'minToMaxPrice'
          ? minToMaxPrice
          : key === 'maxToMinPrice'
          ? maxToMinPrice
          : Alphab;
      }
    });
  }, [minToMaxPrice, maxToMinPrice, Alphab]);

  const handleChange = (e) => {
    setRangeValue(e.target.value);
  }

  const handleCheck = (key) => {
    Object.keys(checkboxes).forEach((checkboxKey) => {
      const checkboxRef = checkboxes[checkboxKey];
      if (checkboxRef.current && checkboxKey !== key) {
        checkboxRef.current.checked = false;
      }
    });

    setMinToMaxPrice(key === 'minToMaxPrice');
    setMaxToMinPrice(key === 'maxToMinPrice');
    setAlphab(key === 'alphabeticOrder');
  }

  return (
    <div className='filter__container'>
      <form className='filter__range'>
        <label htmlFor="rango">Precio Máximo</label>
        <input className='inputcolor' onChange={handleChange} value={RangeValue} type="range" id="rango" name="rango" min="0" max="1000" step="1" />
        <output htmlFor="rango" id="valor">{RangeValue}</output>
      </form>
      <input className='filter__checkbox' type="checkbox" name="" id="filtrado" />
      <label className='filter__label' htmlFor="filtrado">
        Filtrar
        <span className='filter__icon'></span>
        <span className='filter__icon'></span>
      </label>
      <div className='filterscontainer'>
        {Object.keys(checkboxes).map((key) => (
          <div className='div' key={key}>
            <label htmlFor={key}>{key === 'minToMaxPrice' ? 'Menor a Mayor' : key === 'maxToMinPrice' ? 'Mayor a Menor' : 'Alfabeticamente'}</label>
            <input type="checkbox" id={key} ref={checkboxes[key]} onChange={() => handleCheck(key)} />
          </div>
        ))}
      </div>
    </div>
  );
}