import React from "react";
import Styled from "styled-components";

const WebDevelopmentBody = Styled.div`
    p {
        color: #959595;
        margin: 1.4rem 0;
    }
    h3 {
        color: #505060;
        margin: 2rem 0;
        text-transform: capitalize;
    }
`

const WebDevelopment = () => {
    return(
        <>
            <WebDevelopmentBody>
                <h3>web development services</h3>
                
                <p>
                    Our website developers provide expert web application development and web design services to our clients. Appnovation offers a variety of website design and development services, from creating mobile web development solutions and responsive website designs, to building custom e-commerce and intranet experiences using the latest and proven web technologies. With up to 85% of consumers visiting company’s or service provider’s website before making a purchase, more and more consumers make decisions based on their online experience: the appearance, usability and accessibility of your website is more important than ever, especially in an increasingly competitive market.
                </p>
                <p>
                    Here are just some of the ways that we stand out as a company when it comes to what our experience is with websites and creating digital experiences.
                </p>

                <p>Agile web design and development methodology</p>
                <p>Award winning web solutions and sites</p>
                <p>Competitive rates for web design and development talent</p>
                <p>Cross-functional team of 300+ experts based in the Americas, Europe & Asia</p>
                <p>In-house, front-end experts: Business Analysts, UX/UI Specialists & Designers</p>
                <p>Friendly, open, communicative and collaborative way of working with clients</p>
                <p>Proven track record of successful web design and development project delivery</p>
                <p>Rigorous quality assurance (QA) testing before “Go-Live”</p>
                <p>Shorter development times translating to lower costs</p>
                <p>Unparalleled open technology expertise and experience</p>
            </WebDevelopmentBody>
        </>
    )
}
export default WebDevelopment;