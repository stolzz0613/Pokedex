import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Types from "./Types";
import MissingNo from "../assets/MissingNo.png";
import extra from "../extra.json";

const Pokemon = ({ pkm, setSpinner, error }) => {

    const [pkmInfo, setPkmInfo] = useState({
        sprite: "",
        name: "",
        number: "",
    });
    const [color, setColor] = useState("");

    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    };

    useEffect(() => {
        if (!error) {
            const getList = async () => {
                await Axios
                    .get(pkm.url)
                    .then(response => {
                        Axios.get(`https://pokeapi.co/api/v2/pokemon/${response.data.id}/`)
                            .then(response => {
                                setPkmInfo({
                                    sprite: extra[response.data.id - 1]['imageurl'],
                                    name: response.data.name,
                                    number: response.data.id,
                                    types: response.data.types
                                })
                                setColor(colors[response.data.types[0].type.name])
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
            <div className="card shadow"
                style={{
                    position: "relative",
                    height: "100px",
                    margin: "10px",
                    backgroundColor: color
                }}>

                <img
                    src={pkmInfo.sprite}
                    style={{
                        position: "absolute",
                        bottom: "30px",
                        right: "-40px",
                        height: "110px"
                    }}
                    alt={pkm.name}
                />
                <div className="list-inline text-left ml-3 mt-2">
                    <p className="font-weight-bold list-inline-item">{pkmInfo.name.toUpperCase()}</p>
                    <p className="list-inline-item" style={{ marginLeft: "10px" }}>#{pkmInfo.number}</p>
                </div>
                <Types
                    pkmInfo={pkmInfo}
                />
            </div>
        </div>
    );
}

export default Pokemon;