import React, { useState } from 'react';
import pokeball from "../assets/pokeball.png"


const Form = () => {

    const [pokemon, setPokemon] = useState("");

    return (
        <form className="form-row align-items-center">
            <div className="col-md-11">
                <input
                    type="text"
                    className="form-control w-75 mx-auto "
                    placeholder="Ingrese el nombre del pokemón"
                    onChange={e => setPokemon(e.target.value)}
                />
            </div>
            <div className="icon col-md-1 ml-md-n5">
                <img
                    src={pokeball}
                    width="70px"
                    alt="icon"
                    type="submit"
                    onClick={() => {
                        console.log("click")
                    }}
                />
            </div>
        </form >
    );
}

export default Form;