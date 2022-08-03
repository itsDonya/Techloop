import React from "react";

// Components
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import About from "../Components/About";
import Pricing from "../Components/Pricing";
import Counter from "../Components/Counter";
import Solutions from "../Components/Solutions";
import Team from "../Components/Team";
import Reviews from "../Components/Reviews";
import Start from "../Components/Start";
import Blogs from "../Components/Blogs";
import Partners from "../Components/Partners";

const Home = () => {
    return(
        <>
            <Banner />
            <Services />
            <About />
            <Pricing />
            <Counter experience="17+" rates="170" tea="900+" projects="500+" />
            <Solutions />
            <Team />
            <Reviews />
            <Start />
            <Blogs />
            <Partners />
        </>
    )
}

export default Home;