import React from "react";
import Styled from "styled-components";

const ProjectPic = Styled.div`
    border-radius: 4px;
    overflow: hidden;
    display: block;
    transition: all .6s ease-in-out;
    position: relative;
    img {
        width: 100%;
        height: 100%;
    }
    .project-upper-detail {
        width: 100%;
        height: 40%;
        background-color: #000000;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        bottom: 18%;
        opacity: 0;
        transition: all .4s ease-in-out;
        p {
            color: #ffffff;
        }
        button {
            width: 88%;
            height: 40px;
            color: #ffffff;
            background: linear-gradient(177deg, #fa6832 0%, #d54513 100%);
            border-radius: 25px;
            text-transform: capitalize;
            cursor: pointer;
            &:hover {
                filter: brightness(74%);
            }
        }
    }
    &:hover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #d5451386;
    }
    &:hover .project-upper-detail {
        opacity: 1;
        bottom: 28%;
    }
`

const Project = ({ picture }) => {
    return(
        <>
            <ProjectPic className="project">
                <img src={picture} className="project-img" alt="Project" />
                <div className="project-upper-detail">
                    <p>Inspiration Technology</p>
                    <button>view project</button>
                </div>
            </ProjectPic>
        </>
    )
}

export default Project;