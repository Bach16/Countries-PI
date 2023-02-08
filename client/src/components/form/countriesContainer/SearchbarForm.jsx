import React, { useEffect } from 'react'
import "./SearchbarForm.css"

const SearchbarForm = ({countriesToRender,countries,setSearchResults,setCountriesToRender,setSearchInput}) => {

    const onChange = (e)=> {
        setSearchInput(e.target.value.length)
        if(!e.target.value) return setSearchResults([])
        let resultsArray = countriesToRender.filter(country=>country.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchResults(resultsArray)

    }
  return (
    <div>
        <form >
            <input
                className='search_input'
                type="text"
                id='search'
                onChange={onChange}
            />
        </form>
    </div>
  )
}

export default SearchbarForm