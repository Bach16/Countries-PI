import React from 'react'
import Result from "./Result"

const ListCountries = ({searchResults,searchInput,countriesToRender,setCountriesToRender}) => {

  let counter = 0
  if(searchInput && searchResults?.length) {
    return(
    searchResults.map(r => <Result key={counter++} id={r.id} result={r} countriesToRender={countriesToRender} setCountriesToRender={setCountriesToRender}/>)
    )
  }else if (searchInput && !searchResults?.length){
    return <h2>Country not found</h2>
  } else {
    return null
  }

}

export default ListCountries