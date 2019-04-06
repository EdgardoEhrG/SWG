import React, { Component } from 'react';

/* Service */
import SwapiService from "../../services/swapi.ts";

/* Styles */
import './planet-details.scss'; 

export default class PlanetDetails extends Component {

    /* Data */

    swapiService = new SwapiService();

    /* State */

    state = {
        planet: null
    }

    /* LifeCycles */

    componentDidMount() {
        this.updatePlanet();
    }

    componentDidUpdate(prevProps) {
        const { planetId } = this.props;

        if (planetId !== prevProps.planetId) {
            this.updatePlanet();
        }
    }

    /* Events */

    updatePlanet() {
        const { planetId } = this.props;
        if (!planetId) {
            return;
        }

        this.swapiService
            .getPlanet(planetId)
            .then((planet) => {
                this.setState({ planet });
            });
    }

    /* Render */

    render() {

        const { planet } = this.state;

        if (!planet) {
            return <span>Select a planet from a list</span>
        }

        const { id, name } = planet;

        return (
            <div className="planet-details card">
                <img className="planet-image"
                            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                            alt="planet" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">?</span>
                            <span>...</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">?</span>
                            <span>...</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">?</span>
                            <span>...</span>
                        </li>
                    </ul>
                </div>
            </div>
    )
  }
}