import React, { useState} from 'react'

const SearchInput = ({onSearch}) => {
    //parameter paased to handle the search

    const [input, setInput] = useState('')

    //functions to update the fields
    const handleChange =(e)=>{
      setInput(e.target.value);
    }

    //functions to handle form submit
    const onSubmit =(e)=>{
        e.preventDefault();
        onSearch(input)
    }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" className='border-0' placeholder='Search a country...' value={input} onChange={handleChange} />
    </form>
  )
}

export default SearchInput
