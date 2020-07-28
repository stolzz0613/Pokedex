import React, { useState, useEffect } from 'react';
import Axios from "axios"

const Pokemon = ({ region, pkm }) => {

    const [pkmInfo, setPkmInfo] = useState("")

    useEffect(() => {
        const getList = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${pkm.name}/"`
            await Axios
                .get(url)
                .then(response => {
                    setPkmInfo(response.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        getList();
    }, [])

    console.log(pkmInfo.sprites)
    return (
        <div className="col-md-3 mt-4">
            <div className="card">
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