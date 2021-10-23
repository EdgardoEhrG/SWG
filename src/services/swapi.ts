export default class SwapiService {
  private apiBase: string = "https://swapi.co/api";
  private imageBase: string = "https://starwars-visualguide.com/assets/img";

  async getResource(url: string) {
    const responce = await fetch(`${this.apiBase}${url}`);

    if (responce.ok === false) {
      throw new Error(`Could not fetch ${url}, received ${responce.status}`);
    }

    return await responce.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this.transformPerson);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this.transformStarship);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this.transformPlanet);
  };

  getPerson = async (id: number) => {
    const person = await this.getResource(`/people/${id}/`);
    return this.transformPerson(person);
  };

  getStarship = async (id: number) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this.transformStarship(starship);
  };

  getPlanet = async (id: number) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this.transformPlanet(planet);
  };

  getPersonImage = async ({ id }) => {
    return `${this.imageBase}/characters/${id}.jpg`;
  };

  getPlanetImage = async ({ id }) => {
    return `${this.imageBase}/planets/${id}.jpg`;
  };

  getStarshipImage = async ({ id }) => {
    return `${this.imageBase}/starships/${id}.jpg`;
  };

  /* Transformin' */

  private extractID(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  private transformPlanet = (planet) => {
    return {
      id: this.extractID(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diametr: planet.diametr,
    };
  };

  private transformStarship = (starship) => {
    return {
      id: this.extractID(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  };

  private transformPerson = (person) => {
    return {
      id: this.extractID(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    };
  };
}
