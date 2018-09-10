import React, { Component } from "react";
import "./App.css";
import { Button, Breadcrumb } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Step0 from "./views/step0";
import Step1 from "./views/step1";
import Step2 from "./views/step2";
import Step2a from "./views/step2a";
import Step3 from "./views/step3";
import Step3a from "./views/step3a";
import Step3b from "./views/step3b";
import Step4 from "./views/step4";
import NavBar from "./NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nav: [["/step0", "Setup"]]
    };
  }

  addToNavBar = (path, displayName) => {
    this.setState({ nav: [...this.state.nav, [path, displayName]] }, () =>
      console.log(this.state.nav)
    );
  };

  rollBackNavBar = destination => {
    console.log("roll back to", destination);
    this.setState({ nav: this.state.nav.slice(0, destination + 1) });
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar nav={this.state.nav} rollBackNavBar={this.rollBackNavBar} />
          <br />
          <br />
          <Route
            path="/step0"
            render={() => <Step0 addToNavBar={this.addToNavBar} />}
          />
          <Route
            path="/step1"
            render={() => <Step1 addToNavBar={this.addToNavBar} />}
          />
          <Route
            path="/step2"
            render={() => <Step2 addToNavBar={this.addToNavBar} />}
          />
          <Route
            path="/Step2a"
            render={() => <Step2a addToNavBar={this.addToNavBar} />}
          />
          <Route
            path="/Step3"
            render={() => <Step3 addToNavBar={this.addToNavBar} />}
          />
          <Route
            path="/Step3a"
            render={() => <Step3a addToNavBar={this.addToNavBar} />}
          />
          <Route
            path="/Step3b"
            render={() => <Step3b addToNavBar={this.addToNavBar} />}
          />
          <Route
            path="/Step4"
            render={() => <Step4 addToNavBar={this.addToNavBar} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
