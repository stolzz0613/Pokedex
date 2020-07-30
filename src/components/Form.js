import React, { useState } from 'react';
import pokeball from "../assets/pokeball.png"
import Axios from "axios";

const Form = ({ setPokemon, setSpinner, setError, setPage, setButtons, setModal }) => {
    let pkm = []
    const [busquedaPkm, setBusquedaPkm] = useState("");
    const url = `https://pokeapi.co/api/v2/pokemon-species/?limit=20&offset=0`;

    const getList = async () => {
        await Axios
            .get(url)
            .then(response => {
                setPokemon(response.data.results);
                setError(false);
                setPage(0);
                setButtons(true);
                setSpinner(true);
                setModal(false);
            })
            .catch(err => {
                console.log(err);
                setError(true);
                setButtons(false);
                setModal(false);
                setPage(0);
            })
        setTimeout(() => {
            setSpinner(false);
        }, 2000);
    }

    const obtenerPokemon = async () => {
        setPokemon([])
        const url = `https://pokeapi.co/api/v2/pokemon-species/${busquedaPkm}/`
        await Axios.get(url)
            .then(response => {
                pkm = [];
                pkm.push({ url: `https://pokeapi.co/api/v2/pokemon-species/${response.data.id}/` });
                setPokemon(pkm);
                setError(false);
                setButtons(false);
                setSpinner(true);
                setModal(false);
            })
            .catch(err => {
                pkm = [];
                pkm.push({ url: `https://pokeapi.co/api/v2/pokemon-species/1/` });
                setPokemon(pkm);
                setError(true);
                setButtons(false);
                setModal(false);
                setPage(0);
                console.log(err)
            })
        setTimeout(() => {
            setSpinner(false);
        }, 2000);
    }

    const buscarPkm = e => {
        e.preventDefault();
        busquedaPkm
            ? obtenerPokemon()
            : getList()
    }


    return (
        <form onSubmit={buscarPkm} className="form-row align-items-center">
            <div className="col-md-11">
                <input
                    type="text"
                    className="form-control w-75 mx-auto "
                    placeholder="Ingrese el nombre del pokemón"
                    onChange={e => setBusquedaPkm(e.target.value.toLowerCase())}
                />
            </div>
            <div className="icon col-md-1 ml-md-n5">
                <img
                    src={pokeball}
                    width="70px"
                    alt="icon"
                    type="submit"
                    onClick={() => busquedaPkm
                        ? obtenerPokemon()
                        : getList()}    
                />
            </div>
        </form >
    );
}

export default Form;