import React from "react";

// Style
import Sytled from "styled-components";

// Component
import Partner from "./Partner";

// Pictures
import Client1 from "../Img/client-1.jpg";
import Client2 from "../Img/client-2.jpg";
import Client3 from "../Img/client-3.jpg";
import Client4 from "../Img/client-4.jpg";
import Client5 from "../Img/client-5.jpg";

const PartnersContainer = Sytled.div`
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const Partners = () => {
    return(
        <PartnersContainer className="partners">
            <Partner PartnerLogo={Client1} Border="none" />
            <Partner PartnerLogo={Client2} Border="none" />
            <Partner PartnerLogo={Client3} Border="none" />
            <Partner PartnerLogo={Client4} Border="none" />
            <Partner PartnerLogo={Client5} Border="none" />
        </PartnersContainer>
    )
}

export default Partners;