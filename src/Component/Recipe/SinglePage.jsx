import React  from 'react';
import { Link, useParams } from 'react-router-dom';


const SinglePage = () => {
  const  {id} = useParams();
  return (
    <div >
      <Link to='/recipe'><button>Back To the recipe</button></Link>
      <div>
      <h1>{id}</h1>
      </div>
    </div>
  );
}

export default SinglePage;
