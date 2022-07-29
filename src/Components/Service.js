import React from "react";

// Style
import "../Styles/Service.scss";

const Service = ({Title, Description, IconSvg}) => {
    return(
        <div className="service">
            <IconSvg />
            <h4 className="service-title">{Title}</h4>
            <p className="service-description">{Description}</p>
            <button className="service-button">read more</button>
        </div>
    )
}

export default Service;