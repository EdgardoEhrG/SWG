import React from "react";

import ItemDetails from "../item-details/item-details";

import { fSwapiService } from "../../helpers/f-swapi-service";

const StarshipDetails = (props) => {
  return <ItemDetails {...props}></ItemDetails>;
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default fSwapiService(mapMethodsToProps)(StarshipDetails);
