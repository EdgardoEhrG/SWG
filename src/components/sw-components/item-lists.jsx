import React from "react";

import List from "../list/list";

import { fList } from "../../helpers/f-list";
import { fSwapiService } from "../../helpers/f-swapi-service";
import withChildFunction from "../../helpers/f-child";

const ListWithChildren = withChildFunction(List, ({ name }) => {
  return <span>{name}</span>;
});

// ================================

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

// ================================

const PersonList = fSwapiService(mapPersonMethodsToProps)(
  fList(ListWithChildren)
);

const PlanetList = fSwapiService(mapPlanetMethodsToProps)(
  fList(ListWithChildren)
);

const StarshipList = fSwapiService(mapStarshipMethodsToProps)(
  fList(ListWithChildren)
);

export { PersonList, PlanetList, StarshipList };
