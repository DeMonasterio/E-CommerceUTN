import React, { useState, useRef } from 'react'
import "./css/Filters.css"
export default function Filters({ RangeValue, setRangeValue, setminToMaxPrice, setmaxtoMinPrice, setAlphab }) {

    const Bettini = useRef(null);
    const Marce = useRef(null);

    const handleChange = (e) => {
        setRangeValue(e.target.value);
    }

    const handleCheck = (e) => {
        if (Bettini.current && Marce.current) {
            if (e.target === Bettini.current) {
                Marce.current.checked = false
                setmaxtoMinPrice(false)
                setminToMaxPrice(Bettini.current.checked)

            }
            if (e.target === Marce.current) {
                Bettini.current.checked = false
                setminToMaxPrice(false)
                setmaxtoMinPrice(Marce.current.checked)
            }
        }
    }

    const handleAlphabetic = (e) => {
        setAlphab(e.target.checked)
    }




    return (
        <div className='filter__container'>
             <form>
                <label htmlFor="rango" className='rango'>Precio Máximo</label>
                <input onChange={handleChange} value={RangeValue} type="range" id="rango" name="rango" min="0" max="1000" step="1" />
                <output htmlFor="rango" id="valor">{RangeValue}</output>
            </form>

            <input className='filter__checkbox' type="checkbox" name="" id="filtrado" />
            <label className='filter__label' htmlFor="filtrado">
                Filtrar
                <span className='filter__icon'></span>
                <span className='filter__icon'></span>
            </label>

           




            <div className='filterscontainer'>



                <div className='div'>
                    <label htmlFor="minPrice">Menor a Mayor</label>
                    <input type="checkbox" id='minprice' ref={Bettini} onChange={e => handleCheck(e)} />
                </div>

                <div className='div'>
                    <label htmlFor="maxprice">Mayor a Menor</label>
                    <input type="checkbox" id='maxprice' ref={Marce} onChange={e => handleCheck(e)} />
                </div>



                <div className='div'>
                    <label htmlFor="alphab">Alfabeticamente</label>
                    <input type="checkbox" id='alphab' onChange={(e) => handleAlphabetic(e)} />

                </div>
            </div>
        </div>
    )
}
