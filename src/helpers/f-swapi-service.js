import React from 'react';

import { Consumer } from '../components/swapi-service-context/swapi-service-context';

export const fSwapiService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (
            <Consumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService)
                        return (
                            <Wrapped {... props} {... serviceProps} />
                        )
                    }
                }
            </Consumer>
        )
    }
}