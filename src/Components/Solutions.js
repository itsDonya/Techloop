import React from "react";

// Style
import "../Styles/Solutions.scss";

// Component
import Solution from "./Solution";

// Image
import SolutionsImg from "../Img/solutions-img.png";

const Solutions = () => {
    return(
        <div className="solutions">
            <div className="solutions-img-container">
                <img src={SolutionsImg} alt="Solution img" />
            </div>
            <div className="solutions-details">
                <h3 className="solutions-title">Creating IT Solutions</h3>
                <p className="solutions-description">
                    Custom websites that engage users with stunning & intuitive designs. Powerful and Cheap Web Development Packages for your Website. Optimizing web pages and their content to be easily discoverable
                </p>

                <div className="solutions-container">
                    <Solution name="E-Commerce Development" />
                    <Solution name="Seo Optimization" />
                    <Solution name="Mobile Development" />
                    <Solution name="UI/UX Design" />
                    <Solution name="Network Monitoring" />
                    <Solution name="Cloud Services" />
                    <Solution name="Shopify Development" />
                </div>
            </div>
        </div>
    )
}

export default Solutions;