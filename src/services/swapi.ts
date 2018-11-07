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
        return res.results;
    }

    async getAllStartships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPerson(id: number) {
        return this.getResource(`/people/${id}/`);
    }

    getStartship(id: number) {
        return this.getResource(`/starships/${id}/`);
    }

    getPlanet(id: number) {
        return this.getResource(`/planets/${id}/`);
    }
}