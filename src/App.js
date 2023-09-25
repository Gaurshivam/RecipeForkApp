import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Recipe from './Component/Recipe/Recipes'
import Default from './Component/Recipe/Default';
import SinglePage from './Component/Recipe/SinglePage'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipe' element={<Recipe />} />
      <Route path='/recipe/:id' element={<SinglePage />} />
      <Route path='*' element={<Default />} />
    </Routes>
    </div>
  );
}

export default App;
