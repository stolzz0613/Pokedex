import React, { useState, useEffect } from 'react';
import extra from "../../extra.json";

const Description = ({ modalInfo }) => {
    const [description, setDescription] = useState("");
    console.log(extra[modalInfo.pkmInfo.number - 1].weight);
    useEffect(() => {
        setDescription({
            description: extra[modalInfo.pkmInfo.number - 1].xdescription,
            height: extra[modalInfo.pkmInfo.number - 1].height,
            weight: extra[modalInfo.pkmInfo.number - 1].weight,
            egg_groups: extra[modalInfo.pkmInfo.number - 1].egg_groups,
            abilities: extra[modalInfo.pkmInfo.number - 1].abilities[0],
        })
    }, [modalInfo])

    return (
        <div>
            <p className="text-dark font-weight-bolder" style={{ fontSize: "5vw" }}>Description</p>
            <p className="text-justify" style={{ fontSize: "2vw" }}>{description.description}</p>
            <p className="text-dark font-weight-bolder " style={{ fontSize: "5vw" }}>Profile</p>
            <div className="row align-items-center p-2">
                <div className="col-md-6">
                    <p className="text-dark" style={{ fontSize: "2vw" }}>Height: {description.height}</p>
                    <p className="text-dark" style={{ fontSize: "2vw" }}>Weight: {description.weight}</p>
                </div>
                <div className="col-md-6">
                    <p className="text-dark" style={{ fontSize: "2vw" }}>Ability: {description.abilities}</p>
                    <p className="text-dark" style={{ fontSize: "2vw" }}>E.g: {description.egg_groups}</p>
                </div>
            </div>


        </div >
    );
}

export default Description;