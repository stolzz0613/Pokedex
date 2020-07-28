import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Header from "./components/Header"
import Form from "./components/Form";
import List from "./components/List";

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const url = `https://pokeapi.co/api/v2/pokemon-species/?limit=20&offset=${page}`

  useEffect(() => {
    const getList = async () => {

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
  }, [url])

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
      <div className="w-100 text-center mt-4">
        <button
          type="button"
          class="btn btn-secondary mr-3"
        >Atras</button>
        <button
          type="button"
          class="btn btn-secondary ml-3"
          onClick={() => {
            const number = 20 + page;
            setPokemon([])
            setPage(number)
            console.log(page)
          }}
        >Adelante</button>
      </div>
    </div >
  );
}

export default App;
