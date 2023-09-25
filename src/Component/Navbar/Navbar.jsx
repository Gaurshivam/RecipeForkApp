import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Nav'>
      <div className='Navleft'>
        <h1>Food<span style={{color:"red"}}>2Fork</span></h1>
      </div>
      <div className='Navright'>
        <Link to='/' >Home</Link> 
        <Link to='/recipe' >Recipes</Link> 
      </div>
    </div>
  );
}

export default Navbar;
