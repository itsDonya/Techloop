import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const TopNav = Styled.nav`
    width: 50%;

    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;

        .top-nav__item {
            color: #555555;
            padding: 1rem 0;
        }
        
        .has-dropdown:hover ul {
            opacity: 1;
            transition: all .4s ease-out;
            top: 50px;
            visibility: visible;
        }

        .has-dropdown {
            position: relative;
            
            .dropdown {
                width: 250px;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background: linear-gradient(177deg, #fa6832 0%, #d54513 100%);
                
                position: absolute;
                left: 0;
                top: 74px;

                opacity: 0;
                visibility: hidden;
                
                transition: all .4s ease-out;

                z-index: 20;

                .dropdown__item {
                    width: 100%;
                    height: 46px;
                    color: #ffffff;
                    text-align: start;
                    padding: 12px;
                    transition: all .2s ease-out;
                    font-size: 14px;
                    z-index: 10;
                    cursor: pointer;
                    
                    &:hover {
                        color: #000000;
                        background-color: #f7f5f5;
                        padding-top: 14px;
                        padding-left: 14px;
                        box-shadow: 0px 0px 6px #cccccc;
                    }
                }

                hr {
                    width: 100%;
                    height: 1px;
                    background-color: #ffffff;
                    border: none;
                }
            }
        }
    }

    @media (max-width: 768px) {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        transform: ${(props) => props.open ? "none" : "translateX(100%)"};
        transition: transform .2s ease-in-out;
        z-index: 20;

        ul:first-child {
            height: 100%;
            padding: .2rem 0;
            flex-direction: column;
            background: linear-gradient(177deg, #fa6832 0%, #d54513 100%);

            .top-nav__item {
                color: #ffffff !important;
            }

            .has-dropdown:hover ul {
                top: 20px;
            }
    
            .has-dropdown {
                text-align: center;
                display: block;

                .dropdown {
                    width: 100vw;
                    transition: all .2s ease-in-out;
                    overflow: hidden;

                    position: inherit !important;
                    opacity: 1;
                    visibility: visible;

                    top: 20px;
                    
                    z-index: 20;
    
                    .dropdown__item {
                        width: 100%;
                        height: 46px;
                        color: #d54513;
                        background-color: #ffffff;
                        text-align: center;
                        font-size: 14px;
                        z-index: 40;
                    }
                }
            }
        }
    }
`

const Navbar = ({ open }) => {
    return(
        <TopNav className="top-nav" open={open}>
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
        </TopNav>
    )
}

export default Navbar;