import React, { useEffect } from 'react';
import extra from "../../extra.json";

const Evolutions = ({ modalInfo, evolutions, setEvolutions}) => {

    useEffect(() => {
        const evs = extra[modalInfo.pkmInfo.number - 1].evolutions
        for (let i = 0; i < evs.length; i++) {
            let stage = parseInt(extra[modalInfo.pkmInfo.number - 1].evolutions[i].substr(1))
            setEvolutions(evolutions => [...evolutions, stage])
        }
    }, [modalInfo])

    console.log(evolutions)
    return (
        <div>
            <p className="text-dark font-weight-bolder" style={{ fontSize: "5vw" }}>Evolutions</p>
            <div className="row mt-2" >
                {evolutions.map(ev => (
                        <img
                            src={extra[ev - 1].imageurl}
                            alt={extra[ev - 1].imageurl}
                            style={{width:"20vw"}}
                        />
                ))}
            </div>
        </div>
    );
}

export default Evolutions;