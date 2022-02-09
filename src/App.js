import Navbar from './components/Navbar';
import './App.css';
import Slider from './components/Slider';
import {useState} from 'react';
import Foodtime from './components/Foodtime';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Printfooditem from './components/Printfooditem';
import Home from './components/Home';

function App() {
  const [dish, setDish] = useState();

  const dishname = (dish1)=>{
      setDish(dish1);
  }
  console.log(dish);

  return (
    <Router>
      <Navbar dishname={dishname}/>
      
      <Routes>
      <Route  path="/" element={<Home />} />
      <Route exact path="/print" element={<Printfooditem />} />
      </Routes>
    </Router>
  );
}

export default App;
