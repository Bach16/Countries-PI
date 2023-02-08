import React from 'react'
import "./Cards.css"
import Card from "./Card"

const Cards = ({countries}) => {
  return (
    <div className='cards'>
        {countries.map(countrie =>{
            return <Card
            key={countrie.id}
            id={countrie.id}
            image={countrie.image}
            name={countrie.name}
            continent={countrie.continent}
            />
        })}
    </div>
  )
}

export default Cards