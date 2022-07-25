import React, {Component} from "react";
import "../Styles/Button.scss";

class Button extends Component {
    constructor(props) {
        super(props);
        this.btn = React.createRef();
    }

    buttonHover = (e) => {
        e.currentTarget.classList.remove("left");
        e.currentTarget.classList.add("hovered");
        e.currentTarget.style.setProperty("--top", `${e.layerY}px`);
        e.currentTarget.style.setProperty("--left", `${e.layerX}px`);
    }

    buttonUnHover = (e) => {
        e.currentTarget.classList.remove("hovered");
        e.currentTarget.classList.add("left");
        e.currentTarget.style.setProperty("--top", `${e.layerY}px`);
        e.currentTarget.style.setProperty("--left", `${e.layerX}px`);
    }

    render() {
        const { text } = this.props;
        return(
            <button ref={this.btn} onMouseEnter={this.buttonHover} onMouseLeave={this.buttonUnHover}>{text}</button>
        )
    }
}

export default Button;