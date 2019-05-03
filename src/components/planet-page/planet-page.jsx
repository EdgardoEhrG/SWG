import React from 'react';

/* HOC */
import { PlanetList } from '../sw-components/item-lists';

/* Styles */
import "./planet-page.scss";

import { withRouter } from 'react-router-dom';

 const PlanetPage = ({history}) => {
    return (
        <PlanetList onItemSelected={(itemId) => {
            const newPath = `planets/${itemId}`;
            history.push(newPath);
        }} />
    )
}

export default withRouter(PlanetPage);