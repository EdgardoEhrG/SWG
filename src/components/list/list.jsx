import React, { Component } from 'react';

/* Styles */
import './list.scss';

/* Components */
import Loader from "../loader/loader";

export default class List extends Component {

  /* State */

  state = {
    itemList: null
  }

  /* Life Cycles */

  componentDidMount() {

    const { getData } = this.props;

    getData()
      .then((itemList) => { this.setState({
          itemList
        });
      });
  }

  /* Events */

  renderItems(arr) {
    const { onItemSelected } = this.props;
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => onItemSelected(id)}>{label}
        </li>
      )
    });
  }

  /* Render */

  render() {

    const { itemList } = this.state;

    if (!itemList) {
      return <Loader />
    }

    const items = this.renderItems(itemList);

    return (
        <ul className="item-list list-group">
           { items }
        </ul>
    )
  }
}