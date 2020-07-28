import React from 'react';
import Pokemon from "./Pokemon";

const List = ({ pokemon }) => {

    return (
        <div className="row mt-5">
            {pokemon.map(pkm => (
                <Pokemon
                    pkm={pkm}
                />
            ))}
        </div>
    );
}

export default List;