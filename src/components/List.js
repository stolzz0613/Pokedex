import React from 'react';
import Pokemon from "./Pokemon";
import uuid from "uuid";

const List = ({ pokemon, setSpinner, setError, error, setModal, setModalInfo, setEvolutions }) => {

    return (
        <div className="row mt-5" >
            {pokemon.map(pkm => (
                <Pokemon
                    pkm={pkm}
                    key={uuid.v4()}
                    setSpinner={setSpinner}
                    setError={setError}
                    error={error}
                    setModal={setModal}
                    setModalInfo={setModalInfo}
                    setEvolutions={setEvolutions}
                />
            ))}
        </div>
    );
}

export default List;