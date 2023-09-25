import React from 'react';
import './Common.css'

const Search = ({handleChange,handleSubmit,search}) => {
  return (
    <div>
      <h1>Search Recipes With <span style={{color:"red"}}>Food2Fork</span></h1>
      <form>
        <label>Type Recipes Separated By Comma</label>
        <div className='Input'>
          <input type='text' 
          placeholder='chicken,onion,etc'
          value={search}
          // onChange={handleChange}
           />
          <button type='submit' onClick={handleSubmit}>Search</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
