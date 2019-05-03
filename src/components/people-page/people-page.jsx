import React from 'react';
import { withRouter } from 'react-router-dom';

/* Components */
import PersonDetails from '../sw-components/person-details';
import { PersonList } from '../sw-components/item-lists';

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

 const PeoplePage = ({history, match}) => {
    const { id } = match.params;
    return (
        <Row left={<PersonList onItemSelected={(id) => { history.push(id); }} />} right={<PersonDetails itemId={id} />} />
    )
}

export default withRouter(PeoplePage);