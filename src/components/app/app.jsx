import React, { Component } from 'react';

/* Components */

import AppHeader from '../app-header/app-header';
import RandomPlanet from '../random-planet/random-planet';
import List from '../list/list';
import PersonDetails from '../person-details/person-details';

/* Styles*/
import './app.scss';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-6">
                        <List />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        )
    }
}