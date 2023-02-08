import React, { useState } from 'react'
import FormImput from "./FormInput"
import "./Form.css"
import CheckboxContainer from "./CheckboxContainer"
import RangeInputs from "./RangeInputs"
import CountriesContainer from "./countriesContainer/CountriesContainer"

const Form = () => {
  //----------------------------LocalStates------------------------------------
  const [errorsToRender, setErrorsToRender] = useState({})
  const [value,setValue] = useState(1);
  //----------------------------------------------------------------------

  //----------------------Functions--------------------------------------------------
  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*£[()_+\/-=\]{};':"\-\|,.<>?~]/;
    return specialChars.test(str);
  }

  function moreThan7Hours(num) {
    if(num>0 && num<8) return false
    else return true
  }
  const numberErrorFinder = (num) => {
    let error = false
    if(!num.length || moreThan7Hours(num)) error = true
    else error = false
    return error
  }

  const errorsFinder = (input,type) => {
    let error = false
    if (input.length && type === "text"){
      if (!isNaN(input) || containsSpecialChars(input)) {
        error = true      
      }
      
    } else if (input.length && type === "number"){      
      error = numberErrorFinder(input) 
    }else error = true   
    return error
  } 
  //---------------------------------------------------------------------
  
  const [input,setInput] = useState({
    name: "",
    difficulty: "",
    duration:"",
    season:[]    
  })
  const [ischecked, setIschecked] = useState({
    spring:false,
    summer:false,
    fall:false,
    winter:false
  });

  const inputs = [
    {
        id:1,
        name:"name",
        type:"text",
        placeholder:"Name",
        errorMessage:"Name required, it shouldn't include any special character",
        label:"Name",
    },
    {
      id:3,
      name:"duration",
      type:"number",
      min:"0",
      max:"7",
      placeholder:"Duration in hours",
      errorMessage:"Duration required, it shouldn't be more than 7 hours",
      label:"Duration",
      }
  ]
  const onChange = (e) => {   
    setInput({
      ...input,
      [e.target.name]:e.target.value            
  })
    setErrorsToRender({...errorsToRender,[e.target.name]:[errorsFinder(e.target.value,e.target.type)]}) 

    
  }
const renderCheckboxError= () =>{
  let errText = document.getElementById("checkbox-error-text")
  if(!errorsToRender.season)return
  if(errorsToRender.season?.length)errText.style.visibility =  "hidden"
  else errText.style.visibility ="visible"
}

  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log(input);
    renderCheckboxError()
    
    setIschecked({
      spring:false,
      summer:false,
      fall:false,
      winter:false
    })
      setInput({
      name: "",
      difficulty: "",
      duration:"",
      season:[]     
          })
          
           
  }

  
  return (
    <>
      <h1>Create activity</h1>
      <div className='formContainer'>
        <form className='form' onSubmit={handleSubmit}>
          <button 
            className="submit" 
            type="submit" 
/*             disabled={!input.name
            ||!input.difficulty
            ||!input.duration
            ||!input.season            
            }
 */            >Create</button>
            <div className='inputsContainer'>
              {inputs.map(i=> (
                <FormImput
                  key={i.id} 
                  {...i} 
                  value={input[i.name]} 
                  onChange ={(e)=>onChange(e)}   
                  errorsToRender= {errorsToRender}      
                />
              ))}
              <RangeInputs
              value={value}
              setValue={setValue}
              setInput={setInput}
              input={input}/>
              <label>Seasons</label>
            </div>
              <CheckboxContainer
              ischecked={ischecked}
              setIschecked={setIschecked}
              setInput={setInput}
              input={input}
              errorMessage="Season required"
              renderCheckboxError={renderCheckboxError}
              setErrorsToRender={setErrorsToRender}
              errorsToRender={errorsToRender}
              />
        </form>
        <CountriesContainer/>
      </div>      
    </>
  )
}

export default Form