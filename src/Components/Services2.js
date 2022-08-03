import React, {Component} from "react";

// Package
import Styled from "styled-components";

// Component
import Service from "./Service";

// Icons
import { PieChart, Gear, Recovery } from "../Svg/ServicesIcons";

// Styled Div
const ServicesContainer = Styled.div`
    margin-bottom: 10rem;
    display: flex;
    justify-content: space-between;
`

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: [PieChart, Gear, Recovery],
            titles: [
                "IT Solution",
                "App Optimization",
                "Data Recovery"
            ],
            descriptions: [
                "Our highly skilled development teams specialized in Java, php, React",
                "App Store Optimization (ASO) is the process of improving app visibility",
                "omplete Data Recovery Software for Windows PC, laptops, hard drives and more"
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