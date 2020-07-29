import React from 'react';
import Sprites from "./stats/Sprites";
import Stats from "./stats/Stats";
import close from "../assets/close.png"


const Modal = ({ setModal, modalInfo }) => {

    const color = modalInfo.color

    return (
        <div className="h-50 p-4" style={{ width: "2vm" }}>
            <div
                className="card shadow"
                style={{
                    zIndex: "3",
                    background: `linear-gradient(45deg,${color.color1}, ${color.color2})`
                }}>
                <img
                    src={close}
                    width="50px"
                    alt="icon"
                    type="button"
                    onClick={() => {
                        setModal(false)
                    }}
                />
                <div className="list-inline ml-3 mt-2">
                    <p className="font-weight-bold text-dark list-inline-item">{modalInfo.pkmInfo.name.toUpperCase()}</p>
                    <p className="list-inline-item text-dark" style={{ marginLeft: "10px" }}>#{modalInfo.pkmInfo.number}</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Sprites
                            modalInfo={modalInfo}
                        />
                    </div>
                    <div className="col-md-4 m-4 p-2" style={{ width: "100%" }}>
                        <Stats
                            modalInfo={modalInfo}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Modal;