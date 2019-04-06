import React, { Component } from 'react';

/* Service */
import SwapiService from "../../services/swapi.ts";

/* Styles */
import './person-details.scss'; 

export default class PersonDetails extends Component {

    /* Data */

    swapiService = new SwapiService();

    /* State */

    state = {
        person: null
    }

    /* LifeCycles */

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        const { personId } = this.props;

        if (personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    /* Events */

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person });
            });
    }

    /* Render */

    render() {

        const { person } = this.state;

        if (!person) {
            return <span>Select a person from a list</span>
        }

        const { id, name, gender, birthYear, eyeColor } = person;

        return (
            <div className="person-details card">
                <img className="person-image"
                            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                            alt="hero" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
    )
  }
}