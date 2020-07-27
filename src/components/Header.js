import React from 'react';
import banner from "../assets/banner.png"

const Header = () => {
    return (
        <div className=" header text-center">
            <img
                src={banner}
                alt="banner"
                className="w-50 d-inline-block rounded"
            />
            <p className=" text-monospace font-weight-bold">What Pokemon are you looking for?</p>
        </div>
    );
}

export default Header;