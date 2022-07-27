import React from "react";

// Style
import "../Styles/About.scss";

// Image
import AboutPic from "../Img/about.jpg";

const About = () => {
    return(
        <div className="about">
            <section className="about-img-container">
                <img src={AboutPic} className="about-img" alt="About us pic" />
            </section>
            <section className="about-details">
                <p className="about-title">
                    <span>Our mission </span>
                    is to become a respected technology solutions consulting company
                </p>
                <p className="about-description">is to on a strong team of passionate and expert technologists, and evidenced by a very large portfolio of successful projects and clients across the world</p>
                
                <div className="technologies">
                    <div className="technology">
                        <div className="technology-header">
                            <p className="technology-title">Web & Mobile Development</p>
                            <p className="technology-percent">80%</p>
                        </div>
                        <span className="technology-progress-bar" id="eighty"></span>
                    </div>
                    <div className="technology">
                        <div className="technology-header">
                            <p className="technology-title">Graphic Designing</p>
                            <p className="technology-percent">75%</p>
                        </div>
                        <span className="technology-progress-bar" id="seventy-five"></span>
                    </div>
                    <div className="technology">
                        <div className="technology-header">
                            <p className="technology-title">SEO Optimization</p>
                            <p className="technology-percent">70%</p>
                        </div>
                        <span className="technology-progress-bar" id="seventy"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;