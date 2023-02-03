import React from 'react'
import { useState } from 'react'
import "./Checkbox.css"
const Checkbox = ({id,setIschecked,errorsToRender,setErrorsToRender,renderCheckboxError,ischecked,input,setInput,...props}) => {
  console.log(errorsToRender);

  const findingErrorCheckbox = (id,season)=>{
    if(season) return [id,...season]
    else return[id]
  }

  const onChange = (e) => {   
    setIschecked({ ...ischecked,
      [id]:e.target.checked
    })
    setInput({
      ...input,
      season:e.target.checked?[...input.season,id]:input.season.filter((i)=>i !== e.target.id)
  })  
  setErrorsToRender({...errorsToRender,season:e.target.checked?findingErrorCheckbox(id,errorsToRender.season):errorsToRender.season.filter((i)=>i !== e.target.id)})       

  }

  return (
    <div className='checkbox'>
      <input value={ischecked[id]} id={id} {...props}  checked={ischecked[id]} onChange={onChange}/>
      <label>{id}</label>
    </div>
  )
}

export default Checkbox