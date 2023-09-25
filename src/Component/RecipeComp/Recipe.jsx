import React from 'react';
import './Common.css'
import { Link } from 'react-router-dom';

const Recipe = ({publisher,title,source_url,recipe_id,image_url,recipe}) => {
  return (
    <>
    <div className='Card'>
       <img src={recipe.image_url} alt='Recipe' height={200} width={300} />
       <div className='content'>
       <p>{recipe.title}</p>  
       <h3>{recipe.publisher}</h3>
       </div>
       <div className='CardBtn'>
        <Link to={`/recipe/${recipe.recipe_id}`} ><button className='btn1'>Details</button></Link>
        <a href={recipe.source_url} target='_blank' rel="noreferrer" ><button className='btn2'>Recipe URL</button></a>
       </div>
    </div>
    </>
  );
}

export default Recipe;
