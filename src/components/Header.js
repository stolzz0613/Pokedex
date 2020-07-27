import React from 'react';
import banner from "../assets/banner.png"

const Header = () => {
    return (
        <img
            src={banner}
            alt="banner"
            class="w-75 d-inline-block"
        />
    );
}

export default Header;