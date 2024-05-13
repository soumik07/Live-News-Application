import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { NewsBoard } from './Components/NewsBoard';
import { useState } from 'react';


export const App = () => {
  const[selectedCategory, setSelectedCategory] = useState("entertainment");
  const[selectedCountry, setSelectedCountry] = useState("in");
  return (
    <div>
      <NavBar setSelectedCategory={setSelectedCategory} setSelectedCountry={setSelectedCountry}/>
      <NewsBoard selectedCategory={selectedCategory} selectedCountry={selectedCountry}/>
    </div>
  );
}

