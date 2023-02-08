import React from 'react'
import { useEffect } from 'react';
import "./FormInput.css"

const FormImput = ({label,onChange,errorMessage,errorsToRender,name,value,...inputProps}) => {
const changeVisibility = () => {
  let errText = document.getElementById(name)
  if (errorsToRender[name]?.[0]) errText.style.visibility = "visible"
  else errText.style.visibility = "hidden"
}

  useEffect(()=>{
    changeVisibility()
  },[value])

  return (
    <>
        <div className='formInput'>
            <label className="label">{label}</label>
            <input id='aja' {...inputProps} name={name} value={value} onChange={onChange} />
            <span id={name}>{errorMessage}</span>
        </div>
    </>
  )
}

export default FormImput