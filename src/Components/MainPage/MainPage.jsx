import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import './MainPage.css'


const MainPage = () => {
    const navigate = useNavigate();
    const gotoMenu=()=>{
        navigate('/registration')
    }
  return (
    <div className="mp-container">
        <span>Welcome to Food's <br/>Kitchen </span>
        <button className="btn" onClick={gotoMenu}>Go To Menu</button>
    </div>
  )
}

export default MainPage