import React from "react";
import "../Styles/Header.scss";
import Button from "../Utilities/Button.js";
import Logo from "../Img/main-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <header>
                <Link to="/home">
                    <img src={Logo} alt="Techloop Logo"/>
                </Link>
                <nav className="top-nav">
                    <ul>
                        <li className="top-nav__item"><Link to="/home">Home</Link></li>
                        <li className="top-nav__item"><Link to="/about-us">About Us</Link></li>
                        <li className="top-nav__item has-dropdown">
                            <Link to="/">Services +</Link>
                            <ul className="dropdown">
                                <li className="dropdown__item"><Link to="/services">Services</Link></li>
                                <hr/>
                                <li className="dropdown__item"><Link to="/services-details">Services Details</Link></li>
                            </ul>
                        </li>
                        <li className="top-nav__item"><Link to="/pricing">Pricing</Link></li>
                        <li className="top-nav__item has-dropdown">
                            <Link to="/">Pages +</Link>
                            <ul className="dropdown">
                                <li className="dropdown__item"><Link to="/projects">Projects</Link></li>
                                <hr/>
                                <li className="dropdown__item"><Link to="/projects-details">Projects Details</Link></li>
                                <hr/>
                                <li className="dropdown__item"><Link to="/pricing">Pricing</Link></li>
                                <hr/>
                                <li className="dropdown__item"><Link to="/faq">FaQ</Link></li>
                                <hr/>
                                <li className="dropdown__item"><Link to="/coming-soon">Coming Soon</Link></li>
                                <hr/>
                                <li className="dropdown__item"><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                                <hr/>
                                <li className="dropdown__item"><Link to="/privacy-policy">Privacy Policy</Link></li>
                            </ul>
                        </li>
                        <li className="top-nav__item has-dropdown">
                            <Link to="/">Blog +</Link>
                            <ul className="dropdown">
                                <Link className="dropdown__item" to="/blog-grid">Blog Grid</Link>
                                <hr/>
                                <Link className="dropdown__item" to="/blog-details">Blog Details</Link>
                            </ul>
                        </li>
                        <li className="top-nav__item"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
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