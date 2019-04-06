import React, { Component } from 'react';

/* Components */
import List from '../list/list';
import PlanetDetails from '../planet-details/planet-details';
import ErrorIndicator from "../error-indicator/error-indicator";

/* Services */
import SwapiService from '../../services/swapi.ts';

/* Styles */
import "./planet-page.scss";

export default class PlanetPage extends Component {

    /* Data */

    swapiService = new SwapiService();

    /* State */

    state = {
        selectedPlanet: 10,
        hasError: false
    }

    /* Life Cycles */

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    /* Events */

    onPlanetSelected = (selectedPlanet) => {
        this.setState({
            selectedPlanet
        });
    }

    /* Render */

    render() {

        const { selectedPlanet, hasError } = this.state;

        if (hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="row mb2 planet-container">
                <div className="col-md-6">
                    <List onItemSelected={this.onPlanetSelected} getData={this.swapiService.getAllPlanets} renderItem={({name}) => `${name}`} />
                </div>
                <div className="col-md-6">
                    <PlanetDetails planetId={selectedPlanet} /> 
                </div>
            </div>
        )
    }
}