import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='HomeContainer'>
      <img src='https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
       alt='RecipeImage' className='HomeImage' />
      <div className='HomeContent'>
      <h2>AMAZING RECIPES</h2>
      <Link to='/recipe'><button >SEARCH RECIPES</button></Link>
      </div>
      </div>
    </>
  );
}

export default Home;
