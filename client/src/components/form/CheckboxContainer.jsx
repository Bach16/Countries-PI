import React from 'react'
import { useEffect } from 'react'
import Checkbox from "./Checkbox"
import "./CheckboxContainer.css"
//[Object.values(ischecked).some(e=> e === true)]

const CheckboxContainer = ({setIschecked,setErrorsToRender,errorsToRender,renderCheckboxError,errorMessage,ischecked,setInput,input}) => {
    const seasonsInput = [
        {
          key:1,
          id:"spring",
          type:"checkbox",
          name:"season",
        },
        {
          key:2,
          id:"summer",
          type:"checkbox",
          name:"season",
        },
        {
          key:3,
          id:"fall",
          type:"checkbox",
          name:"season",
        },
        {
          key:4,
          id:"winter",
          type:"checkbox",
          name:"season",
        }    
      ]
    useEffect(()=>{
      renderCheckboxError()
    },[ischecked])
  
    
  return (
    <div className='seasonInput'>
        {seasonsInput.map(e=>(
            <Checkbox
            ischecked={ischecked}
            setIschecked={setIschecked}
            setInput={setInput}
            input={input}
            setErrorsToRender={setErrorsToRender}
            errorsToRender={errorsToRender}
            {...e}
            />
        ))}
        <span id='checkbox-error-text'>{errorMessage}</span>
    </div>

  )
}

export default CheckboxContainer