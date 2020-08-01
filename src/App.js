import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Header from "./components/Header"
import Form from "./components/Form";
import List from "./components/List";
import Spinner from "./components/Spinner";
import Modal from "./components/Modal";

function App() {

  const [spinner, setSpinner] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [buttons, setButtons] = useState(true);
  const [modal, setModal] = useState(false);
  const [evolutions, setEvolutions] = useState([]);
  const [modalInfo, setModalInfo] = useState({});

  const url = `https://pokeapi.co/api/v2/pokemon-species/?limit=20&offset=${page}`;

  useEffect(() => {
    const getList = async () => {
      await Axios
        .get(url)
        .then(response => {
          setPokemon(response.data.results);
          setSpinner(true);
        })
        .catch(err => {
          console.log(err);
        })
      setTimeout(() => {
        setSpinner(false);
      }, 2000);
      const header = document.querySelector(".header");
      header.scrollIntoView({ behavior: "smooth" });
    }
    getList();
  }, [page, url])

  const componente =
    (spinner)
      ? <Spinner />
      : <List
        pokemon={pokemon}
        setSpinner={setSpinner}
        setError={setError}
        error={error}
        setModal={setModal}
        setModalInfo={setModalInfo}
        setEvolutions={setEvolutions}
      />

  const botones =
    (buttons)
      ? <div className="w-100 text-center mt-4">
        <button
          type="button"
          className="btn btn-secondary mr-3"
          onClick={() => {
            if (page === 0) return;
            const number = page - 20;
            setPage(number);
            setModal(false);
            setPokemon([]);
          }}
        >&laquo; Atras</button>
        <button
          type="button"
          className="btn btn-secondary ml-3"
          onClick={() => {
            const number = 20 + page;
            setPage(number);
            setModal(false);
            setPokemon([]);
          }}
        >Adelante &raquo;</button>
      </div>
      : <div className="w-100 text-center mt-4">
        <button
          type="button"
          className="btn btn-info mt-4 ml-3"
          onClick={() => {
            window.location.reload(false);
          }}
        >Home</button>
      </div>


  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className="container">
        <Form
          setPokemon={setPokemon}
          setSpinner={setSpinner}
          setError={setError}
          setPage={setPage}
          setButtons={setButtons}
          setModal={setModal}
        />
      </div>
      <div className="container mt-3 w-100">
        {modal
          ? <Modal
            setModal={setModal}
            modalInfo={modalInfo}
            setEvolutions={setEvolutions}
            evolutions={evolutions}
          />
          : null}
        {componente}
      </div>
      {botones}
    </div>
  );
}

export default App;
