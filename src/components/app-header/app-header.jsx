import React, { Component } from 'react';

/* Styles */
import './app-header.scss';

export default class AppHeader extends Component {
    render() {
        return (
            <div className="header d-flex">
                <h3>
                    <a href="#id">Star Wars Guide</a>
                </h3>
                <ul className="d-flex">
                    <li>
                        <a href="#id">People</a>
                    </li>
                    <li>
                        <a href="#id">Planets</a>
                    </li>
                    <li>
                        <a href="#id">Starships</a>
                    </li>
                </ul>
            </div>
        )
    }
}