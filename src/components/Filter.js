import React from 'react'
//import { useState } from 'react';

const Filter = ({onSelect}) => {

    //const[selectOption, setSelectOption]=useState('')
    const handleSelect = e =>{
        const regionName = e.target.value;
        onSelect(regionName)
    }

  return (
    <>
      <select className='select' onChange={handleSelect}>
        <option>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Ocenia">Ocenia</option>
      </select>
    </>
  )
}

export default Filter
