import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCountry,resetCountryDetails} from "../../redux/actions"
import Loading from '../home/loading/Loading'
import NavBar from '../navBar/NavBar'

const Detail = (props) => {
  const dispatch = useDispatch()
  const country = useSelector(state=>state.country)
  useEffect(()=>{
    dispatch(getCountry(props.match.params.id))
    return dispatch(resetCountryDetails())
  },[])
  if(country.id){
    return (
      <div>
        <NavBar/>
        <h1>{country.name}</h1>
        <img src={country.image} alt="flag"/>
        <h2>Continent:</h2>
        <h3>{country.continent}</h3>
        <h2>Capital:</h2>
        <h3>{country.capital}</h3>
        <h2>Subregion:</h2>
        <h3>{country.subregion}</h3>
        <h2>Area:</h2>
        <h3>{country.area} km</h3>
        <h2>Population:</h2>
        <h3>{country.population}</h3>

      </div>
    )
  }else{
    return(
      <Loading/>
    )
  }
}

export default Detail