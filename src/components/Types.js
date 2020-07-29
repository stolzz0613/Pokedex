import React, { useState, useEffect } from 'react';


const Types = ({ pkmInfo, colors }) => {

    const [types, setTypes] = useState({
        type1: "",
        type2: ""
    });

    const [color, setColor] = useState("");

    useEffect(() => {

        if (pkmInfo.types) {
            let length = Object.keys(pkmInfo.types).length
            if (length > 1) {
                setTypes({
                    type1: pkmInfo.types[0].type.name,
                    type2: pkmInfo.types[1].type.name
                })
                setColor(colors[pkmInfo.types[0].type.name])
            } else {
                setTypes({
                    type1: pkmInfo.types[0].type.name,
                })
                setColor(colors[pkmInfo.types[0].type.name])
            }
        }
    }, [pkmInfo])

    const componente = (types.type2)
        ? <div>
            <p className={"list-inline-item font-weight-bold text-dark mr-2"}>Tipo:</p>
            <p
                className={`list-inline-item shadow badge badge-pill text-dark badge-primary w-25`}
                style={{ backgroundColor: color }}
            >{types.type1}</p>
            <p
                className={`list-inline-item shadow badge badge-pill text-dark badge-primary w-25 ml-3`}
                style={{ backgroundColor: color }}
            >{types.type2}</p>
        </div>
        : <div>
            <p className={"list-inline-item font-weight-bold text-dark mr-2"}>Tipo:</p>
            <p
                className={`list-inline-item shadow badge badge-pill text-dark badge-primary w-50`}
                style={{ backgroundColor: color }}
            >{types.type1}</p>
        </div>

    return (
        <div className="list-inline text-center mt-2">
            {componente}
        </div>
    );
}

export default Types;