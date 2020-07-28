import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Header from "./components/Header"
import Form from "./components/Form";
import List from "./components/List";
import Spinner from "./components/Spinner";

function App() {

  const [spinner, setSpinner] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const url = `https://pokeapi.co/api/v2/pokemon-species/?limit=20&offset=${page}`;

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
      const header = document.querySelector(".header");
      header.scrollIntoView({ behavior: "smooth" })
    }
    getList();
  }, [url])

  const componente =
    (spinner)
      ? <Spinner />
      : <List
        pokemon={pokemon}
        setSpinner={setSpinner}
        setError={setError}
        error={error}
      />

  const botones =
    (!error)
      ? <div className="w-100 text-center mt-4">
        <button
          type="button"
          className="btn btn-secondary mr-3"
          onClick={() => {
            if (page === 0) return;
            const number = page - 20;
            setPokemon([])
            setPage(number)
          }}
        >&laquo; Atras</button>
        <button
          type="button"
          className="btn btn-secondary ml-3"
          onClick={() => {
            const number = 20 + page;
            setPokemon([])
            setPage(number)
          }}
        >Adelante &raquo;</button>
      </div>
      : <button
        type="button"
        className="btn btn-primary ml-3"
        onClick={() => {
          window.location.reload(false);
        }}
      >Home</button>


  return (
    <div>
      <Header />
      <div className="container">
        <Form
          setPokemon={setPokemon}
          setSpinner={setSpinner}
          setError={setError}
        />
      </div>
      <div className="container mt-3">
        {componente}
      </div>

      {botones}
    </div>
  );
}

export default App;
