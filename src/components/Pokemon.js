import React, { useState, useEffect } from 'react';
import Axios from "axios"

const Pokemon = ({ region, pkm }) => {

    const [pkmSprite, setPkmSprite] = useState("")

    useEffect(() => {
        const getList = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${pkm.name}/`
            await Axios
                .get(url)
                .then(response => {
                    setPkmSprite(response.data.sprites.front_default)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        getList();
    }, [pkm.name])
   

    return (
        <div className="col-md-3 mt-4">
            <div className="card">
                <img
                    src={pkmSprite}
                    className="card-img-top"
                    alt={pkm.name}
                />
                <div className="card-body">
                    <p className="card-text">
                        {pkm.name}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;