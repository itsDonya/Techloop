import React from "react";

import Styled from "styled-components";

import ProjectPic from "../Img/project-details-1.jpg";

import WebDevelopment from "./WebDevelopment";
import { Facebook, Twitter, LinkedIn } from "../Svg/SocialMedia";
import Button from "../Utilities/Button";

const ProjectsDetailsContainer = Styled.div`
    padding: 4rem 0;
    img {
        width: 100%;
        border-radius: 10px;
    }
    #projects-details {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        margin: 2rem 0;

        .projects-details-column {
            p, button, div {
                margin-top: .6rem;
            }
            h5 {
                font-size: 16px;
            }
            p {
                color: #959595;
                font-size: 14px;
            }
            div {
                display: flex;
                gap: .9rem;

                svg {
                    width: 30px;
                    height: 30px;
                    fill: #d54513;
                    padding: .3rem;
                    border-radius: 50%;
                    border: 1px dashed #d54513;
                    transition: all .3s ease-in-out;
                    cursor: pointer;
                    &:hover {
                        fill: #ffffff;
                        background-color: #d54513;
                    }
                }
            }
        }
    }
`

const ProjectsDetails = () => {
    return(
        <ProjectsDetailsContainer className="projects-details">

            <img src={ProjectPic} alt="Our Services" />
            <div id="projects-details">
                <div className="projects-details-column">
                    <h5>Author</h5>
                    <p>Liam Jhon</p>
                </div>

                <div className="projects-details-column">
                    <h5>Category</h5>
                    <p>Design, Development</p>
                </div>

                <div className="projects-details-column">
                    <h5>Date</h5>
                    <p>February 25, 2022</p>
                </div>

                <div className="projects-details-column">
                    <h5>Share</h5>
                    <div className="projects-details-links">
                        <Facebook />
                        <Twitter />
                        <LinkedIn />
                    </div>
                </div>

                <div className="projects-details-column">
                    <h5>Works Links</h5>
                    <p><Button text="Live Preview" /></p>
                </div>
            </div>
            <WebDevelopment title="web development" />
            
        </ProjectsDetailsContainer>
    )
}

export default ProjectsDetails;