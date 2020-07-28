import React from 'react';
import Pokemon from "./Pokemon";

const List = ({ region, pokemon }) => {

    return (
        <div className="row mt-5">
            {pokemon.map(pkm => (
                <Pokemon
                    region={region}
                    pkm={pkm}
                    key={pkm.name}
                />
            ))}

        </div>
    );
}

export default List;