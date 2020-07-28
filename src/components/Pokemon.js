import React, { useState, useEffect } from 'react';
import Axios from "axios";
import MissingNo from "../assets/MissingNo.png";

const Pokemon = ({ pkm, setSpinner, error }) => {

    const [pkmInfo, setPkmInfo] = useState({
        sprite: "",
        name: "",
        number: "",
    });
    useEffect(() => {
        if (!error) {
            const getList = async () => {
                await Axios
                    .get(pkm.url)
                    .then(response => {
                        Axios.get(`https://pokeapi.co/api/v2/pokemon/${response.data.id}/`)
                            .then(response => {
                                setPkmInfo({
                                    sprite: response.data.sprites.front_default,
                                    name: response.data.name,
                                    number: response.data.id
                                })
                            })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            getList();
        } else {
            setPkmInfo({
                sprite: MissingNo,
                name: "No se encontro el pokemon",
                number: "??"
            })
            setSpinner(false)
        }

    }, [pkm, setSpinner, error])


    return (
        <div className="col-md-3 mt-4 mx-auto">
            <div className="card">
                <img
                    src={pkmInfo.sprite}
                    className="card-img-top"
                    alt={pkm.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{pkmInfo.name}</h5>
                    <p className="card-text">
                        {pkmInfo.number}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;