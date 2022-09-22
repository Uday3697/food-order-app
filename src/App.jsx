import { BrowserRouter,Routes,Route } from 'react-router-dom';


import './App.css';
import FoodItems from './Components/FoodItems/FoodItems';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';

import Login from './Components/Registration/Login';

import Registration from './Components/Registration/Registration';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
     <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path="registration" element={<Registration/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="foodItems" element={<FoodItems/>} />
        
      </Routes>
      </div>
    </BrowserRouter>
    
    
    
   
  
  );
}

export default App;
