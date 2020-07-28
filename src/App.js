import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Header from "./components/Header"
import Form from "./components/Form";
import List from "./components/List";

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon-species/?limit=20&offset=600`
      await Axios
        .get(url)
        .then(response => {
          setPokemon(response.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }
    getList();
  }, [])

  return (
    <div>
      <Header />
      <div className="container">
        <Form />
      </div>
      <div className="container mt-3">
      <List
          pokemon={pokemon}
        />
      </div>
    </div >
  );
}

export default App;
