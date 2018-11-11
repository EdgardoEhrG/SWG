import React, { Component } from 'react';

/* Styles */
import './list.scss';

/* Service */
import SwapiService from "../../services/swapi.ts";

/* Components */
import Loader from "../loader/loader";

export default class List extends Component {

  /* State */

  state = {
    peopleList: null
  }

  /* Data */

  swapiService = new SwapiService();

  /* Life Cycles */

  componentDidMount() {
    this.swapiService
        .getAllPeople()
        .then((peopleList) => { this.setState({
            peopleList
          });
        });
  }

  /* Events */

  renderItems(arr) {
    const { onPersonSelected } = this.props;
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => onPersonSelected(id)}>{name}
        </li>
      )
    });
  }

  /* Render */

  render() {

    const { peopleList } = this.state;

    if (!peopleList) {
      return <Loader />
    }

    const items = this.renderItems(peopleList);

    return (
        <ul className="item-list list-group">
           { items }
        </ul>
    )
  }
}