import React, { useState } from 'react';
import pokeball from "../assets/pokeball.png"
import Axios from "axios";

const Form = ({ setPokemon, setSpinner, setError }) => {
    let pkm = []
    const [busquedaPkm, setBusquedaPkm] = useState("");

    const obtenerPokemon = async () => {
        setSpinner(true)
        const url = `https://pokeapi.co/api/v2/pokemon-species/${busquedaPkm}/`
        await Axios.get(url)
            .then(response => {
                pkm = [];
                pkm.push({ url: `https://pokeapi.co/api/v2/pokemon-species/${response.data.id}/` });
                setPokemon(pkm);
                setSpinner(false);
            })
            .catch(err => {
                pkm = [];
                pkm.push({ url: `https://pokeapi.co/api/v2/pokemon-species/1/` });
                setPokemon(pkm);
                setSpinner(false);
                setError(true);
                console.log(err)
            })
    }

    return (
        <form className="form-row align-items-center">
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
                    onClick={() => busquedaPkm ? obtenerPokemon() : null}
                />
            </div>
        </form >
    );
}

export default Form;