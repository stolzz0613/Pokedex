import React from 'react';
import Pokemon from "./Pokemon";
import uuid from "uuid";

const List = ({ pokemon }) => {

    return (
        <div className="row mt-5">
            {pokemon.map(pkm => (
                <Pokemon
                    pkm={pkm}
                    key={uuid.v4()}
                />
            ))}
        </div>
    );
}

export default List;