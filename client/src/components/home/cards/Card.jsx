import React from 'react'
import "./Card.css"
import {Link} from "react-router-dom"


const Card = ({id,name,image,continent}) => {
  return (
    <Link to={`/countrie/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <div className='card'>
        <img src={image} alt="country flag"/>
        <h3>{name}</h3>
        <h4>{continent}</h4>
      </div>
    </Link>
  )
}

export default Card