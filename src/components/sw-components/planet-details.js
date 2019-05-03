import React from 'react';

import ItemDetails from '../item-details/item-details';

import { fSwapiService } from '../../helpers/f-swapi-service';

const PlanetDetails = (props) => {
    return (
        <ItemDetails
            {...props}
        >
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default fSwapiService(mapMethodsToProps)(PlanetDetails);