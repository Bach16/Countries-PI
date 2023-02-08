import React from 'react'
import NavBar from "../navBar/NavBar"
import Form from "../form/Form"
import "./Create.css"

const Create = () => {  
  const error = { }
  return (
    <div className='create' >
      <NavBar/>
      {error.message ? "error" : <Form classname="form"/>}

    </div>

)
}

export default Create