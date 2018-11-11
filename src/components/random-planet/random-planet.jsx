import React, { Component } from 'react';

/* API */
import SwapiServices from "../../services/swapi.ts";

/* Components */
import Loader from "../loader/loader";
import PlanetView from "./planet-view";
import ErrorIndicator from "../error-indicator/error-indicator";

/* Styles */
import "./random-planet.scss";

export default class RandomPlanet extends Component {

    /* State */

    state = {
        planet: {},
        loading: true,
        error: false
    }

    /* Data */

    swapiServices = new SwapiServices();

    /* Life Cycles */

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    /* Events */

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25);
        this.swapiServices.getPlanet(id)
                .then(this.onPlanetLoaded)
                .catch(this.onError);
    }

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    /* Render */

    render() {

        const { planet, loading, error } = this.state;

        const loader = (loading) ? <Loader /> : null;
        const hasData = !(loading || error);
        const content = (hasData) ? <PlanetView planet={planet} /> : null;
        const errorMessage = (error) ? <ErrorIndicator /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                { errorMessage }
                { loader }
                { content }
            </div>
        )
    }
}