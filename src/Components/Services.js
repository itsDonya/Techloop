import React, {Component} from "react";

// Package
import Styled from "styled-components";

// Component
import Service from "./Service";

// Icons
import { GlobeSolid, DisplaySolid ,BoltSolid } from "../Svg/ServicesIcons";

// Styled Div
const ServicesContainer = Styled.div`
    margin-top: 10rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-between;
    .service {
        &:nth-child(2) {
            background-color: #d54513;
            .service-title {
                color: #ffffff;
            }
            .service-description {
                color: #ffffff;
            }
            .service-button {
                color: #d54513;
                background-color: #ffffff;
            }
            svg {
                fill: #ffffff;
            }
        }
    }
`

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: [GlobeSolid, DisplaySolid, BoltSolid],
            titles: [
                "Web Solution",
                "Web Development",
                "SEO Optimization"
            ],
            descriptions: [
                "Custom websites that engage users with stunning & intuitive designs",
                "Powerful and Cheap Web Development Packages for your Website",
                "Optimizing web pages and their content to be easily discoverable"
            ]
        }
    }
    render() {
        const { icons, titles, descriptions } = this.state;
        return(
            <ServicesContainer className="services">
                <Service Title={titles[0]} Description={descriptions[0]} IconSvg={icons[0]} />
                <Service Title={titles[1]} Description={descriptions[1]} IconSvg={icons[1]} />
                <Service Title={titles[2]} Description={descriptions[2]} IconSvg={icons[2]} />
            </ServicesContainer>
        )
    }
}

export default Services;