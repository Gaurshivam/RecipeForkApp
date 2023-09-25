import React, { useState } from 'react';
import RecipeList from '../RecipeComp/RecipeList';
import Search from '../RecipeComp/Search';
import { recipeData } from '../RecipeData';

const Recipe = () => {
  const [state, setstate] = useState({
    recipes: recipeData,
    search: ""
  });

  const handleSubmit = e =>{
    e.preventDefault();
  }
  
  const handleChange = e => {
    setstate({
      search: e.target.value,
    })
    

  }
  return (
    <div>
      <Search search={state.search} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <RecipeList recipes={state.recipes}/>
    </div>
  );
}

export default Recipe;
