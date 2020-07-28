import React from 'react';
import Pokemon from "./Pokemon";
import uuid from "uuid";

const List = ({ pokemon, setSpinner, setError,error }) => {

    return (
        <div className="row mt-5">
            {pokemon.map(pkm => (
                <Pokemon
                    pkm={pkm}
                    key={uuid.v4()}
                    setSpinner={setSpinner}
                    setError={setError}
                    error={error}
                />
            ))}
        </div>
    );
}

export default List;