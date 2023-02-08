import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left-element'>
       <h1><Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link></h1> 
      </div>
      <div className='navbar-right-element'>
        <h2><Link to="/create" style={{ color: 'inherit', textDecoration: 'inherit'}}>Create</Link></h2>
      </div>
  
    </div>
  )
}

export default NavBar