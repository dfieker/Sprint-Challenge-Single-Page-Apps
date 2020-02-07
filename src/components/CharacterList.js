import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [filterData, updateData] = useState([])

  const search = charAt => updateData(charAt)
  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

  useEffect(() => {
    axios
      .get(
        "https://rickandmortyapi.com/api/character/"
      )
      .then(response => {
        setCharacters(response.data.results);
        updateData(response.data.results)
      })
      .catch(error => {
        console.log("No data returned", error);
      });
  }, []);

  return (
    <div>
        <SearchForm characters={characters} search={search} />
        <section className="character-list grid-view">
        {filterData.map(char => {
          return(
            <div>
              <CharacterCard characters={char} key={char.id} />
            </div>
          )
        })}
        </section>
    </div>
  );
}
