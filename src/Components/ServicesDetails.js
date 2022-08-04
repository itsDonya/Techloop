import React from "react";
import Styled from "styled-components";

import WebDevelopment from "./WebDevelopment";
import ServicePic from "../Img/services-details-1.jpg";

const ServicesDetailsContainer = Styled.div`
    padding: 4rem 0;
    img {
        width: 100%;
        border-radius: 10px;
    }
`

const ServicesDetails = () => {
    return(
        <ServicesDetailsContainer className="services-details">

            <img src={ServicePic} alt="Our Services" />
            <WebDevelopment title="web development services" />
            
        </ServicesDetailsContainer>
    )
}

export default ServicesDetails;