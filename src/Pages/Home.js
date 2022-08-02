import React from "react";

// Components
import Header from "../Components/Header";
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
import Footer from "../Components/Footer";
import CopyRight from "../Components/CopyRight";

const Home = () => {
    return(
        <>
            <Header />
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
            <Footer />
            <CopyRight />
        </>
    )
}

export default Home;