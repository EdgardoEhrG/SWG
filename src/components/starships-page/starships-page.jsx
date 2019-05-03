import React, { Component } from 'react';

/* Components */
import List from '../list/list';
import ErrorIndicator from "../error-indicator/error-indicator";

/* Services */
import SwapiService from '../../services/swapi.ts';

/* Styles */
import "./starships-page.scss";

export default class StarshipsPage extends Component {

    /* Data */

    swapiService = new SwapiService();

    /* State */

    state = {
        selectedStarship: 10,
        hasError: false
    }

    /* Life Cycles */

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    /* Events */

    onStarshipSelected = (selectedStarship) => {
        this.setState({
            selectedStarship
        });
    }

    /* Render */

    render() {

        const { hasError } = this.state;

        if (hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="row mb2 starships-container">
                <div className="col-md-6">
                    <List onItemSelected={this.onStarshipSelected} getData={this.swapiService.getAllStarships} renderItem={({name}) => `${name}`} />
                </div>
                <div className="col-md-6">
                </div>
            </div>
        )
    }
}