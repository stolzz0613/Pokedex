import React, { useState, useEffect } from 'react';


const Types = ({ pkmInfo }) => {

    const [types, setTypes] = useState({
        type1: "",
        type2: ""
    });

    
    useEffect(() => {

        if (pkmInfo.types) {
            let length = Object.keys(pkmInfo.types).length
            if (length > 1) {
                setTypes({
                    type1: pkmInfo.types[0].type.name,
                    type2: pkmInfo.types[1].type.name
                })
            } else {
                setTypes({
                    type1: pkmInfo.types[0].type.name,
                })          
            }
        }
    }, [pkmInfo])

    const componente = (types.type2)
        ? <div>
            <p className={"list-inline-item font-weight-bold mr-2"}>Tipo:</p>
            <p className={`list-inline-item badge badge-pill badge-primary w-25`}>{types.type1}</p>
            <p className={`list-inline-item  badge badge-pill badge-primary w-25 ml-3`}>{types.type2}</p>
        </div>
        : <div>
            <p className={`list-inline-item badge badge-pill badge-primary w-50`}>{types.type1}</p>
        </div>

    return (
        <div className="list-inline text-center mt-2">
            {componente}
        </div>
    );
}

export default Types;