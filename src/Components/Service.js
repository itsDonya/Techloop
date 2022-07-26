import React from "react";

// Style
import "../Styles/Service.scss";

const Service = ({Title, Description, ServiceBg, IconSvg, TitleColor, DescriptionColor, ButtonColor, ButtonBg}) => {
    const ButtonStyle = {...ButtonColor, ...ButtonBg};
    return(
        <div className="service" style={ServiceBg}>
            <IconSvg />
            <h4 className="service-title" style={TitleColor}>{Title}</h4>
            <p className="service-description" style={DescriptionColor}>{Description}</p>
            <button className="service-button" style={ButtonStyle}>read more</button>
        </div>
    )
}

export default Service;