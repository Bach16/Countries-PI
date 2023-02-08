import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteFormCountries} from "../../../redux/actions"

const Countryadded = ({name,id}) => {

    const dispatch = useDispatch()
    const countriesAdded = useSelector(state=>state.formCountries)
    const deletCountry = (id)=>{
        return countriesAdded.filter(e=>e !== id)
    }
    console.log(countriesAdded)
    const onClick = (e)=> {
        dispatch(deleteFormCountries(deletCountry(id)))
    }
    
  return (
    <div>
        <h2>{name}</h2>
        <button onClick={onClick}>x</button>
    </div>
  )
}

export default Countryadded