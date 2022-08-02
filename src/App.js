import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CopyRight from "./Components/CopyRight";

class App extends Component {
  render() {
    return(
      <>
        <Header />

          <Switch>
            <Route path="/about-us" component={AboutUs} />
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