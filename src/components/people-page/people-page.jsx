import React, { Component } from 'react';

/* Components */
import List from '../list/list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from "../error-indicator/error-indicator";

/* Styles */
import "./people-page.scss";

export default class PeoplePage extends Component {

    /* State */

    state = {
        selectedPerson: 10,
        hasError: false
    }

    /* Life Cycles */

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    /* Events */

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        });
    }

    /* Render */

    render() {

        const { selectedPerson, hasError } = this.state;

        if (hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <List onPersonSelected={this.onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedPerson} />
                </div>
            </div>
        )
    }
}