import React from "react";
import Styled from "styled-components";
import { Facebook, Twitter, LinkedIn, Pinterest } from "../Svg/SocialMedia";

const CopyrightSection = Styled.div`
    height: 6vh;
    background-color: #181818;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .copyright-text {
        color: #cccccc;
        font-size: 12px;
    }
    .copyright-social-links {
        width: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    svg {
        width: 16px;
        height: 16px;
        fill: #959595;
        transition: fill .1s ease-in-out;
        cursor: pointer;

        &:hover {
            fill: #d5451392;
        }
    }
    .copyright-social-line {
        width: 1px;
        height: 18px;
        display: inline-block;
        background-color: #000000;
    }
    // Mobile Size
    @media (max-width: 768px) {
        .copyright-text {
            font-size: 10px;
        }
    }
`

const CopyRight = () => {
    return(
        <CopyrightSection className="copyright">

            <p className="copyright-text">CopyRight 2022 Techloop - All Rights Reserved.</p>

            <div className="copyright-social-links">
                <Facebook />
                <span className="copyright-social-line"></span>
                <Twitter />
                <span className="copyright-social-line"></span>
                <LinkedIn />
                <span className="copyright-social-line"></span>
                <Pinterest />
            </div>
        </CopyrightSection>
    )
}

export default CopyRight;