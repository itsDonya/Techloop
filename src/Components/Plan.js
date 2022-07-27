import React from "react";
import "../Styles/Plan.scss";

const Plan = ({type, price}) => {
    return(
        <div className="plan">
            <h5 className="plan-type">{type}</h5>

            <p className="plan-price">$<span>{price}</span>/ per month</p>

            <ul className="plan-properties">
                <li className="plan-property">free domain</li>
                <li className="plan-property">web development</li>
                <li className="plan-property">Free design</li>
                <li className="plan-property">branding</li>
                <li className="plan-property">hosting</li>
                <li className="plan-property">Lifetime free updates</li>
                <li className="plan-property">Free cencelation</li>
                <li className="plan-property">demo installation</li>
                <li className="plan-property">help center access</li>
            </ul>

            <button className="plan-button">get started</button>
        </div>
    )
}

export default Plan;