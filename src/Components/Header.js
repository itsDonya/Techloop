import React from "react";
import "../Styles/Header.scss";
import Button from "./Button";
import Logo from "../Img/main-logo.png";

const Header = () => {
    return(
        <>
            <header>
                <a href="./">
                    <img src={Logo} alt="Techloop Logo"/>
                </a>
                <nav class="top-nav">
                    <ul>
                        <li class="top-nav__item"><a href="./">Home</a></li>
                        <li class="top-nav__item"><a href="./">About Us</a></li>
                        <li class="top-nav__item has-dropdown">
                            <a href="./">Services +</a>
                            <ul class="dropdown">
                                <li class="dropdown__item"><a href="./">Services</a></li>
                                <hr/>
                                <li class="dropdown__item"><a href="./">Services Details</a></li>
                            </ul>
                        </li>
                        <li class="top-nav__item"><a href="./">Pricing</a></li>
                        <li class="top-nav__item has-dropdown">
                            <a href="./">Pages +</a>
                            <ul class="dropdown">
                                <li class="dropdown__item"><a href="./">Projects</a></li>
                                <hr/>
                                <li class="dropdown__item"><a href="./">Projects Details</a></li>
                                <hr/>
                                <li class="dropdown__item"><a href="./">Pricing</a></li>
                                <hr/>
                                <li class="dropdown__item"><a href="./">FaQ</a></li>
                                <hr/>
                                <li class="dropdown__item"><a href="./">Coming Soon</a></li>
                                <hr/>
                                <li class="dropdown__item"><a href="./">Terms & Conditions</a></li>
                                <hr/>
                                <li class="dropdown__item"><a href="./">Privacy Policy</a></li>
                            </ul>
                        </li>
                        <li class="top-nav__item has-dropdown">
                            <a href="./">Blog +</a>
                            <ul class="dropdown">
                                <a class="dropdown__item" href="./">Blog Grid</a>
                                <hr/>
                                <a class="dropdown__item" href="./">Blog Details</a>
                            </ul>
                        </li>
                        <li class="top-nav__item"><a href="./">Contact</a></li>
                    </ul>
                </nav>
                <div class="sign-in">
                    <a href="./" class="sign-in__btn">Log In / Signup</a>
                </div>
                <div class="top-estimates">
                    <Button text="get estimates" />
                </div>
            </header>
        </>
    )
}

export default Header;