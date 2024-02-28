import React from "react";
import logo from "../assets/logo.png";
import './Header.css';

const Header=()=>  {
    return (
        <>
            <div className="header" style={{ padding: '2px', textAlign: 'center' }}>
                <img style={{ display:'block', margin: '0 auto', maxWidth: '40%', height:'auto' }}src={logo} alt="C.R.I Fluid Systems"/>
            </div>
        </>
    );
};

export default Header;