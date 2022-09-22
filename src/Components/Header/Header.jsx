import React from 'react'
import './Header.css'
import restroLOgo from '../../assets/restaurant_24px.svg'

const Header = () => {
  return (
    <div className="header">
      <img src={restroLOgo} alt="" /> 
      <span>Food's Restaurant</span>
    </div>
    
    
  )
}

export default Header
