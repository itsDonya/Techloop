import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "./Pages/Home";

class App extends Component {
  render() {
    return(
      <>
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </>
    )
  }
}
export default App;