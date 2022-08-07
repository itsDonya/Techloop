import React, { Component } from "react";
import Styled from "styled-components";

// Components
import Project from "./Project";
import Pagination from "../Utilities/Pagination"

// Images
import Project1 from "../Img/projects-1.jpg";
import Project2 from "../Img/projects-2.jpg";
import Project3 from "../Img/projects-3.jpg";
import Project4 from "../Img/projects-4.jpg";
import Project5 from "../Img/projects-5.jpg";
import Project6 from "../Img/projects-6.jpg";

const ProjectsContainer = Styled.div`
    padding: 3rem 0;
    .projects-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
    }
    // Mobile & Tablet Size
    @media (max-width: 1024px) {
        .projects-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [Project1, Project2, Project3, Project4, Project5, Project6]
        }
    }
    render() {
        const { pictures } = this.state;
        return(
            <ProjectsContainer className="projects">
                <div className="projects-container">
                    {pictures.map((picture, index) => {
                        return <Project picture={picture} key={index} />
                    })}
                </div>
                <Pagination pages="4" />
            </ProjectsContainer>
        )
    }
}

export default Projects;