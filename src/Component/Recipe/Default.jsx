import React from 'react';
import { Link } from 'react-router-dom';

const Default = () => {
  return (
    <div>
      <h1 style={{margin:"150px auto",color:"red"}}>You are in wrong Page 404</h1>
      <Link to='/'><button style={{color:"white",backgroundColor:"green",padding:"10px",borderRadius:"5px"}}>Return to Home</button></Link>
    </div>
  );
}

export default Default;
