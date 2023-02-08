import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Countryadded from "./Countryadded"

const AddCountries = ({searchResults,setCountriesToRender,countriesToRender,countries}) => {

    const countriesAdded = useSelector(state=>state.formCountries)
    let [render,setRender] = useState([])

    useEffect(()=>{
        let array =[]
        for (let i = 0; i < countriesAdded.length; i++) {
            array.push(countries.filter(c=>c.id===countriesAdded[i]))          
        }
        setRender(array.flat())
    },[countriesAdded])
    let counter = 200

  return (
    <div>
        <h1>added</h1>
        {render.flat().map(c=> <Countryadded name={c.name} key={counter++} id={c.id}/>)}
    </div>
  )
}

export default AddCountries