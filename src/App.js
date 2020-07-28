import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Header from "./components/Header"
import Form from "./components/Form";
import List from "./components/List";

function App() {

  const [region, setRegion] = useState("");
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const url = `https://pokeapi.co/api/v2/generation/2/`
      await Axios
        .get(url)
        .then(response => {
          setRegion(response.data.main_region.name)
          setPokemon(response.data.pokemon_species)
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
          region={region}
          pokemon={pokemon}
        />
      </div>
    </div >
  );
}

export default App;
