import React from "react";

// Components
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import About from "../Components/About";
import Pricing from "../Components/Pricing";
import Counter from "../Components/Counter";

const Home = () => {
    return(
        <>
            <Header />
            <Banner />
            <Services />
            <About />
            <Pricing />
            <Counter experience="17+" rates="170" tea="900+" projects="500+" />
        </>
    )
}

export default Home;