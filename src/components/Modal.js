import React from 'react';
import close from "../assets/close.png"


const Modal = ({ setModal, modalInfo }) => {

    console.log(modalInfo.pkmInfo.response.data["sprites"])
    const color = modalInfo.color



    return (
        <div className="container mx-auto h-50 p-4">
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
                <div className="mx-auto">
                    <img
                        src={modalInfo.pkmInfo.response.data["sprites"].front_default}
                        alt={modalInfo.pkmInfo.name}
                    />
                    <img
                        src={modalInfo.pkmInfo.response.data["sprites"].back_default}
                        alt={modalInfo.pkmInfo.name}
                    />
                </div>
                <div className="mx-auto">
                    <img
                        src={modalInfo.pkmInfo.response.data["sprites"].front_shiny}
                        alt={modalInfo.pkmInfo.name}
                    />
                    <img
                        src={modalInfo.pkmInfo.response.data["sprites"].back_shiny}
                        alt={modalInfo.pkmInfo.name}
                    />
                </div>
            </div>
        </div>
    );
}

export default Modal;