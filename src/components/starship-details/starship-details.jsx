import React, { Component } from 'react';

/* Service */
import SwapiService from "../../services/swapi.ts";

/* Styles */
import './starship-details.scss'; 

export default class StarshipDetails extends Component {

    /* Data */

    swapiService = new SwapiService();

    /* State */

    state = {
        starship: null
    }

    /* LifeCycles */

    componentDidMount() {
        this.updateStarship();
    }

    componentDidUpdate(prevProps) {
        const { starshipId } = this.props;

        if (starshipId !== prevProps.starshipId) {
            this.updateStarship();
        }
    }

    /* Events */

    updateStarship() {
        const { starshipId } = this.props;
        if (!starshipId) {
            return;
        }

        this.swapiService
            .getStarship(starshipId)
            .then((starship) => {
                this.setState({ starship });
            });
    }

    /* Render */

    render() {

        const { starship } = this.state;

        if (!starship) {
            return <span>Select a starship from a list</span>
        }

        const { id, name } = starship;

        return (
            <div className="starship-details card">
                <img className="starship-image"
                            src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                            alt="starship" />
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