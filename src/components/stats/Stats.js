import React from 'react';

const Stats = ({ modalInfo }) => {

    const stats = modalInfo.pkmInfo.response.data.stats
    console.log(`${stats[0].base_stat}%`)
    return (
        <div className="container">
            <p className="text-center font-weight-bolder text-dark mb-0">STATS</p>
            <div className="row align-items-center">
                <p className="col-md-2 mb-0" style={{ fontSize: "1.5vw" }}>HP</p>
                <div className="col-md-10">
                    <div className="progress">
                        <div
                            className="bg-primary progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: `${stats[0].base_stat}%` }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <p className="col-md-2 mb-0" style={{ fontSize: "1.5vw" }}>Attack</p>
                <div className="col-md-10">
                    <div className="progress">
                        <div
                            className="bg-secondary progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: `${stats[1].base_stat}%` }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <p className="col-md-2 mb-0" style={{ fontSize: "1.5vw" }}>Defense</p>
                <div className="col-md-10">
                    <div className="progress">
                        <div
                            className="bg-info progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: `${stats[2].base_stat}%` }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <p className="col-md-2 mb-0" style={{ fontSize: "1.5vw" }}>Speed</p>
                <div className="col-md-10">
                    <div className="progress">
                        <div
                            className="bg-warning progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: `${stats[3].base_stat}%` }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <p className="col-md-2 mb-0" style={{ fontSize: "1.5vw" }}>Sp Atk</p>
                <div className="col-md-10">
                    <div className="progress">
                        <div
                            className="bg-danger progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: `${stats[4].base_stat}%` }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <p className="col-md-2 mb-0" style={{ fontSize: "1.5vw" }}>Sp Def</p>
                <div className="col-md-10">
                    <div className="progress">
                        <div
                            className="bg-success progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: `${stats[5].base_stat}%` }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Stats;