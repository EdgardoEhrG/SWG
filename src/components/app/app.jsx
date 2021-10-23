import React, { Component } from "react";

import AppHeader from "../app-header/app-header";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import PlanetPage from "../planet-page/planet-page";
import StarshipsPage from "../starships-page/starships-page";
import ErrorBoundry from "../error-boundry/error-boundry";

import PlanetDetails from "../sw-components/planet-details";

import { Provider } from "../swapi-service-context/swapi-service-context";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.scss";

import SwapiService from "../../services/swapi.ts";

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <Provider value={this.swapiService}>
          <div className="app">
            <Router>
              <AppHeader />
              <RandomPlanet />

              <Route
                path="/"
                exact={true}
                render={() => <h2>Welcome to StarDB</h2>}
              />
              <Route path="/people/:id?" exact={true} component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route
                path="/planet/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <PlanetDetails itemId={id} />;
                }}
              />
              <Route path="/starships" component={StarshipsPage} />
            </Router>
          </div>
        </Provider>
      </ErrorBoundry>
    );
  }
}
