import React, { Component } from "react";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import logo from "./logo.png";

// const client = new ApolloClient({
//   uri: "http://localhost:5000/graphql",
//   cache: new InMemoryCache(),
// });

export default class App extends Component {
  render() {
    return (
      // <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX logo"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Switch>
            <Route path="/" component={Launches} exact />
            <Route path="/launch/:flight_number" exact component={Launch} />
          </Switch>
        </div>
      </BrowserRouter>
      // </ApolloProvider>
    );
  }
}
