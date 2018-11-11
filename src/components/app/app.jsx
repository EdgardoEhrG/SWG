import React, { Component } from 'react';

/* Components */

import AppHeader from '../app-header/app-header';
import RandomPlanet from '../random-planet/random-planet';

/* Styles*/
import './app.scss';
import PeoplePage from '../people-page/people-page';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader />
                <RandomPlanet />
                <PeoplePage />
            </div>
        )
    }
}