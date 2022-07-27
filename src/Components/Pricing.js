import React, {Component} from "react";

// Style
import "../Styles/Pricing.scss";

// Component
import Plan from "./Plan";

class Pricing extends Component {
    render() {
        return(
            <>
                <div className="pricing">
                <h1 className="pricing-title">Our Pricing</h1>
                <div className="pricing-plans">
                    <Plan type="Startup" price="35" />
                    <Plan type="Standard" price="45" />
                    <Plan type="Premium" price="77" />
                </div>
                </div>
            </>
        )
    }
}

export default Pricing;