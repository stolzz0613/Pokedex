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

        <div className="col-md-4 mx-auto">
            <div className="card" style={{ position: "relative", height: "70px", margin: "10px" }}>
                <img
                    src={pkmInfo.sprite}
                    style={{ position: "absolute", bottom: "0px", right: "0" }}
                    alt={pkm.name}
                />
                <div className="row text-justify" style={{margin:"10px"}}>
                    <h5 >{pkmInfo.name}</h5>
                    <p style={{marginLeft:"10px"}}>#{pkmInfo.number}</p>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;