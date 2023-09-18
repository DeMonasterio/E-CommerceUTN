import React, { useState, useRef } from 'react'
import "./css/Filters.css"
export default function Filters({ RangeValue, setRangeValue }) {

    const primerHijoRef = useRef(null);
    const segundoHijoRef = useRef(null);

    const handleChange = (e) => {
        setRangeValue(e.target.value);
    }

    const handleCheck = (e) => {
        if (primerHijoRef.current && segundoHijoRef.current) {
            if (primerHijoRef.current.checked === segundoHijoRef.current.checked) {
                if (e.target === primerHijoRef.current) {
                    segundoHijoRef.current.checked = false
                }
                if(e.target === segundoHijoRef.current) {
                    primerHijoRef.current.checked = false
                }
            }
        }
        
    }




    return (
        <div className='filter__container'>

            <input className='filter__checkbox' type="checkbox" name="" id="filtrado" />
            <label className='filter__label' htmlFor="filtrado">
                Filtrar
                <span className='filter__icon'></span>
                <span className='filter__icon'></span>
            </label>

            <form>
                <label htmlFor="rango">Precio Máximo</label>
                <input onChange={handleChange} type="range" id="rango" name="rango" min="0" max="999" step="1" />
                <output htmlFor="rango" id="valor">{RangeValue}</output>
            </form>




            <div className='filterscontainer'>



                <div className='div'>
                    <label htmlFor="minPrice">Menor a Mayor</label>
                    <input type="checkbox" id='minprice' ref={primerHijoRef} onChange={e => handleCheck(e)} />
                </div>

                <div className='div'>
                    <label htmlFor="maxprice">Mayor a Menor</label>
                    <input type="checkbox" id='maxprice' ref={segundoHijoRef} onChange={e => handleCheck(e)} />
                </div>






                <div className='div'>
                    <label htmlFor="alphab">Alfabeticamente</label>
                    <input type="checkbox" id='alphab' />

                </div>
            </div>
        </div>
    )
}
