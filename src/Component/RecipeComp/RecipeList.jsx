import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({recipes}) => {
  return (
    <div>
      <div>
        <h3>Recipe List</h3>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"}}>
        {  recipes.map((recipe) =>{return(
          <div>
          <Recipe key={recipe.recipe_id} recipe={recipe} />
          </div>
        )})}
      </div>
    </div>
  );
}

export default RecipeList;
