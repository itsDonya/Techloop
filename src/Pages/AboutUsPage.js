import React from "react";

// Components
import About from "../Components/About";
import Counter from "../Components/Counter";
import Team from "../Components/Team";
import Reviews from "../Components/Reviews";
import Partners from "../Components/Partners";

const AboutUsPage = () => {
    return(
        <>
            <About />
            <Counter experience="17+" rates="170" tea="900+" projects="500+" />
            <Team />
            <Reviews />
            <Partners />
        </>
    )
}

export default AboutUsPage;