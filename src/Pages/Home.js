import React from "react";

// Components
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import About from "../Components/About";
import Pricing from "../Components/Pricing";

const Home = () => {
    return(
        <>
            <Header />
            <Banner />
            <Services />
            <About />
            <Pricing />
        </>
    )
}

export default Home;