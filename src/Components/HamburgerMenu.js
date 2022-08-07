import React, { Component } from "react";
import Navbar from "./Navbar";
import Styled from "styled-components";

const Hamburger = Styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    cursor: pointer;
    z-index: 30;
    position: absolute;
    right: 3rem;

    span {
        width: 90%;
        height: 4px;
        background-color: ${(props) => props.open ? "#ffffff" : "#000000"};
        border-radius: 12px;
        transition: all .2s ease-in-out;
        transform-origin: 0px;

        &:nth-child(1) {
            transform: ${(props) => props.open ? "rotate(45deg)" : "rotate(0)"};
        }
        &:nth-child(2) {
            transform: ${(props) => props.open ? "translateX(-100%)" : "translateX(0)"};
            opacity: ${(props) => props.open ? "0" : "1"};
        }
        &:nth-child(3) {
            transform: ${(props) => props.open ? "rotate(-45deg)" : "rotate(0)"};
        }
    }
`



class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    
    hamburgerEvent = () => {
        this.setState({open: !this.state.open});
    }

    render() {
        return(
            <>
                <Hamburger open={this.state.open} onClick={this.hamburgerEvent} className="hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>

                <Navbar open={this.state.open} />
            </>
        )
    }
}

export default HamburgerMenu;