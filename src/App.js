import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CopyRight from "./Components/CopyRight";

// Pages
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import ServicesPage from "./Pages/ServicesPage";
import PricingPage from "./Pages/PricingPage";
import ServicesDetailsPage from "./Pages/ServicesDetailsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectsDetailsPage from "./Pages/ProjectsDetailsPage";

class App extends Component {
  render() {
    return(
      <>
        <Header />

          <Switch>
            <Route path="/projects-details" component={ProjectsDetailsPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/services-details" component={ServicesDetailsPage} />
            <Route path="/pricing" component={PricingPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
          </Switch>

        <Footer />
        <CopyRight />

        <div>
        </div>
      </>
    )
  }
}
export default App;