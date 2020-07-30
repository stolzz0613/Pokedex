import React, { useState, useEffect } from 'react';
import extra from "../../extra.json";

const Description = ({ modalInfo }) => {
    const [description, setDescription] = useState("");

    useEffect(() => {
        setDescription(extra[modalInfo.pkmInfo.number - 1].xdescription)
    }, [modalInfo])

    return (
        <div>
            <p className="text-dark font-weight-bolder" style={{ fontSize: "5vw" }}>Description</p>
            <p className="text-justify m-4" style={{ fontSize: "2vw" }}>{description}</p>
        </div>
    );
}

export default Description;