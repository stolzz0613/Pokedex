import React from 'react';

const Sprites = ({modalInfo}) => {

    return (
        <div>
            <div className="row">
                <div className="mx-auto">
                    <img
                        src={modalInfo.pkmInfo.response.data["sprites"].front_default}
                        alt={modalInfo.pkmInfo.name}
                        style={{width:"15vw", height:"15vw"}}
                    />
                    <img
                        src={modalInfo.pkmInfo.response.data["sprites"].back_default}
                        alt={modalInfo.pkmInfo.name}
                        style={{width:"15vw", height:"15vw"}}
                    />
                </div>
            </div>
            <div className="row">
                <div className="mx-auto">
                    <img
                        src={modalInfo.pkmInfo.response.data["sprites"].front_shiny}
                        alt={modalInfo.pkmInfo.name}
                        style={{width:"15vw", height:"15vw"}}
                    />
                    <img
                        src={modalInfo.pkmInfo.response.data["sprites"].back_shiny}
                        alt={modalInfo.pkmInfo.name}
                        style={{width:"15vw", height:"15vw"}}
                    />
                </div>
            </div>
        </div>
    );
}

export default Sprites;