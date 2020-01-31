import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from "axios";


export default function App() {

  const [list, setList] = useState([]);
  console.log(list);
  useEffect(() => {
    axios
      .get(
        "https://rickandmortyapi.com/api/character/"
      )
      .then(response => {
        console.log(response.data.results);
        setList(response.data.results);
      })
      .catch(error => {
        console.log("No data returned", error);
      });
  }, []);
  return (
    <main>
      <Header />
    </main>
  );
}
