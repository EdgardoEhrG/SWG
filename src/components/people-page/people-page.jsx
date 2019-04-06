import React, { Component } from 'react';

/* Components */
import List from '../list/list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from "../error-indicator/error-indicator";

/* Services */
import SwapiService from '../../services/swapi.ts';

/* Styles */
import "./people-page.scss";

const Row = ({left, right}) => {
    return (
        <div className="row mb2">
                <div className="col-md-6">
                    { left }
                </div>
                <div className="col-md-6">
                    { right }
                </div>
            </div>
    )
}

export default class PeoplePage extends Component {

    /* Data */

    swapiService = new SwapiService();

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

        const itemList = (
            <List 
                onItemSelected={this.onPersonSelected} 
                getData={this.swapiService.getAllPeople} 
                renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
            />
        );

        const personDetails = (
            <PersonDetails personId={selectedPerson} />
        )

        return (
            <Row left={itemList} right={personDetails} />
        )
    }
}