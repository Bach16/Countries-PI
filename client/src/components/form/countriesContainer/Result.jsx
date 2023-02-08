import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addFormCountries,deleteFormCountries} from "../../../redux/actions"


const Result = ({result,id,countriesToRender,setCountriesToRender}) => {
  const dispatch = useDispatch()
  const countriesAdded = useSelector(state=>state.formCountries)
  

  const onClick = (e)=> {
    if(countriesAdded.includes(id)) return
    dispatch(addFormCountries([
      ...countriesAdded, id
    ]))
  }

  return (
    <div>
        <h4 >{result.name}</h4>
        <button onClick={onClick}>+</button>
    </div>
  )
}

export default Result