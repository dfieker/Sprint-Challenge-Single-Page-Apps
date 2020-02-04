import React, { useState } from "react";

const margin = {marginTop: '20px', marginLeft: '20px'}

export default function SearchForm(props) {
  const [results, setResults] = useState()

  const handleChanges = e => setResults(e.target.value)

  const submitHandler = e => {
    e.preventDefault()

    const charSearch = props.characters.filter(char => {
      return char.name.toLowerCase().indexOf(results.toLowerCase()) !== -1
    })

    props.search(charSearch)

  }

 
  return (
    <section className="search-form" style={margin}>
     <form onSubmit={submitHandler}>
       <input 
        type='text' 
        onChange={handleChanges} 
        name="character" 
        id="character" 
        placeholder="Search"></input>
        <input type="submit"></input>
     </form>
    </section>
  );
}
