import React from "react";
import "../Styles/Counter.scss";

const Counter = ({experience, rates, tea, projects}) => {
    return(
        <div className="counter">
            <div className="counters">
                <div className="counter-box">
                    <span className="counter-number">{experience}</span>
                    <p className="counter-title">Years of Experience</p>
                </div>
                <div className="counter-box">
                    <span className="counter-number">{rates}</span>
                    <p className="counter-title">5 Star Rating</p>
                </div>
                <div className="counter-box">
                    <span className="counter-number">{tea}</span>
                    <p className="counter-title">Cup Of Tea</p>
                </div>
                <div className="counter-box">
                    <span className="counter-number">{projects}</span>
                    <p className="counter-title">Complete Projects</p>
                </div>
            </div>
        </div>
    )
}

export default Counter;