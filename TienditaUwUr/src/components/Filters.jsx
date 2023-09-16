import React from 'react'
import "./css/Filters.css"
export default function Filters() {


    return (
        <div className='filterscontainer'>
            <label htmlFor="minPrice">Menor a Mayor</label>
            <input type="checkbox" id='minprice' />

            <label htmlFor="minPrice">Mayor a Menor</label>
            <input type="checkbox" id='maxprice' />

            <label htmlFor="minPrice">Alfabeticamente</label>
            <input type="checkbox" id='alphab' />
        </div>
    )
}
