import React, { Component } from 'react';

/* Styles */
import './person-details.scss';

export default class PersonDetails extends Component {
  render() {
    return (
        <div className="person-details card">
            <img className="person-image"
                        src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
                        alt="hero" />
            <div className="card-body">
                <h4>Luke Skywalker</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>30</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>blue</span>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}