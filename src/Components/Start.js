import React from "react";
import { Link } from "react-router-dom";

// Style
import "../Styles/Start.scss";

const Start = () => {
    return (
        <div className="start">
            <h4 className="start-title">Ready to start something great?</h4>
            <p className="start-description">Our partners with top industry technology firms, ensuring we stay on the cutting edge.</p>
            <Link to="/contact" className="start-button">contact us</Link>
        </div>
    )
}

export default Start;