import React, { useEffect } from 'react'
import {getCountries} from "../../redux/actions"
import {useSelector, useDispatch} from "react-redux"
import Cards from "./cards/Cards"
import NavBar from "../navBar/NavBar"
import Loading from "./loading/Loading"
import "./Home.css"


const Home = () => {
  let dispatch = useDispatch()
  let countries = useSelector(state => state.countries)
  useEffect(()=>{
    if(!countries.length) dispatch(getCountries())
  },[])

  if(!countries.length){
    return(
      <Loading/>
    )
  }else {
    return (
      <div className='home'>
        <NavBar/>
        <Cards countries={countries}/>
      </div>
    )
  }
}

export default Home