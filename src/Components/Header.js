import React from "react";
import "../Styles/Header.scss";
import Button from "../Utilities/Button.js";
import Logo from "../Img/main-logo.png";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
    return(
        <>
            <header>
                <Link to="/home">
                    <img src={Logo} alt="Techloop Logo"/>
                </Link>

                <HamburgerMenu />

                <div className="sign-in">
                    <Link to="/" className="sign-in__btn">Log In / Signup</Link>
                </div>

                <div className="top-estimates">
                    <Button text="get estimates" />
                </div>
                
            </header>
        </>
    )
}

export default Header;