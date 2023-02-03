import React from 'react'
import NavBar from "../navBar/NavBar"
import Form from "../form/Form"

const Create = () => {  
  const error = { }
  return (
    <>
      <NavBar/>
      {error.message ? "error" : <Form classname="form"/>}

    </>

)
}

export default Create