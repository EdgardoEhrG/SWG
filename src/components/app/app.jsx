import React, { Component } from 'react';

/* Components */

import AppHeader from '../app-header/app-header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';
import PlanetPage from "../planet-page/planet-page";
// import StarshipsPage from '../starships-page/starships-page';

/* Styles*/
import './app.scss';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader />
                <RandomPlanet />
                <PeoplePage />
                <PlanetPage />
                {/* <StarshipsPage /> */}
            </div>
        )
    }
}