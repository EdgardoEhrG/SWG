export default class SwapiService {

    _apiBase: string = 'https://swapi.co/api';

    async getResource(url: string) {
        const responce = await fetch(`${this._apiBase}${url}`);

        if(responce.ok === false) {
            throw new Error(`Could not fetch ${url}, received ${responce.status}`);
        }

        return await responce.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    async getAllStartships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPerson(id: number) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    async getStartship(id: number) {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    async getPlanet(id: number) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    _extractID(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractID(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diametr: planet.diametr
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractID(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractID(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }
}