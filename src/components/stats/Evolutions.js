import React, { useState, useEffect } from 'react';
import extra from "../../extra.json";

const Evolutions = ({ modalInfo, evolutions, setEvolutions }) => {

    const [lenght, setLenght] = useState(0);

    useEffect(() => {
        const evs = extra[modalInfo.pkmInfo.number - 1].evolutions
        for (let i = 0; i < evs.length; i++) {
            let stage = parseInt(extra[modalInfo.pkmInfo.number - 1].evolutions[i].substr(1))
            setEvolutions(evolutions => [...evolutions, stage])
        }
        const setGrid = () => {
            if (evs.length === 1) {
                setLenght("col-sm-12 col-md-" + 12)
            } else if (evs.length === 2) {
                setLenght("col-sm-12 col-md-" + 6)
            } else {
                setLenght("col-sm-12 col-md-" + 4)
            }
        }
        setGrid();
    }, [modalInfo, setEvolutions])

console.log(extra[0])
    return (
        <div>
            <p className="text-dark font-weight-bolder" style={{ fontSize: "5vw" }}>Evolutions</p>
            <div className="row mt-2" >
                {evolutions.map(ev => (
                    <div className={lenght}>
                        <img
                            src={extra[ev - 1].imageurl}
                            alt={extra[ev - 1].imageurl}
                            style={{ width: "20vw" }}
                            className="bg-light rounded-circle mb-3"
                        />
                        <p>{extra[ev - 1].id} {extra[ev - 1].name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Evolutions;