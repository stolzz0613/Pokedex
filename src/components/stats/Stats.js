import React from 'react';

const Stats = ({ modalInfo }) => {
    return (
        <div class="container">
            <div className="row align-items-center">
                <p className="col-md-2 mb-0" style={{ fontSize: "1.5vw" }}>HP</p>
                <div className="col-md-10">
                    <div className="progress">
                        <div
                            className="align-middle progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: "10%" }}
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
                            className="align-middle progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: "10%" }}
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
                            className="align-middle progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: "10%" }}
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
                            className="align-middle progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: "10%" }}
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
                            className="align-middle progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: "10%" }}
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
                            className="align-middle progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: "10%" }}
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