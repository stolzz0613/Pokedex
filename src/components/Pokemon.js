import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Types from "./Types";
import MissingNo from "../assets/MissingNo.png";
import extra from "../extra.json";


const Pokemon = ({ pkm, setSpinner, error, setModal, setModalInfo }) => {
   
    const [pkmInfo, setPkmInfo] = useState({
        sprite: "",
        name: "",
        number: "",
        response: []
    });
    const [color, setColor] = useState({
        color1: "",
        color2: ""
    });

    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#c0a6de',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#dfa1ed',
        flying: '#e6fafa',
        fighting: '#E6E0D4',
        normal: '#F5F5F5',
        steel: '#cfcdd1',
        ghost: '#a69ab3',
        ice: '#c4faff',
        dark: '#5b5c5c'
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
                                    types: response.data.types,
                                    response: response
                                })
                                if (response.data.types.length > 1) {
                                    setColor({
                                        color1: colors[response.data.types[0].type.name],
                                        color2: colors[response.data.types[1].type.name]
                                    })
                                } else {
                                    setColor({
                                        color1: colors[response.data.types[0].type.name],
                                        color2: "#fff"
                                    })
                                }
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
        }
    }, [pkm])

    return (

        <div className="col-md-4 mx-auto">
            <div className="card shadow"
                style={{
                    position: "relative",
                    height: "100px",
                    margin: "10px",
                    background: `linear-gradient(45deg,${color.color1}, ${color.color2})`
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
                    onClick={() => {
                        setModal(true)
                        setModalInfo({
                            pkmInfo,
                            color
                        })
                        const icon = document.querySelector(".icon");
                        icon.scrollIntoView({ behavior: "smooth" });
                    }}></img>
                <div className="list-inline text-left ml-3 mt-2">
                    <p className="font-weight-bold list-inline-item">{pkmInfo.name.toUpperCase()}</p>
                    <p className="list-inline-item" style={{ marginLeft: "10px" }}>#{pkmInfo.number}</p>
                </div>
                <Types
                    pkmInfo={pkmInfo}
                    colors={colors}
                />
            </div>
        </div>
    );
}

export default Pokemon;