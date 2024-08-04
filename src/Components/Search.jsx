import React, { useState } from 'react'
import NorthIcon from '@mui/icons-material/North';

function Search({ darkmode, input, handleInput, submit }) {
  // const [input, setInput] = useState('');




  return (
    <div className={`search search-${darkmode ? 'black' : 'white'}`}>
      <input
        className={`text-${darkmode ? 'white' : 'black'}`}
        type="text"
        value={input}
        placeholder='Type Message Here'
        onChange={(e) => handleInput(e.target.value)}
      />
      <button className='submit' onClick={() => submit()} disabled={input === '' ? true : false}>
        <NorthIcon />
      </button>
    </div >
  )
}

export default Search
