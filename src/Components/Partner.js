import React from "react";

const Partner = ({ PartnerLogo, Border }) => {
    return(
        <img src={PartnerLogo} alt="Partner Logo" className="partner" style={{border: Border, borderRadius: "4px"}} />
    )
}

export default Partner;