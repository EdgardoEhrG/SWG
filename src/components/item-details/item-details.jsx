import React, { Component } from 'react';

/* Styles */
import './item-details.scss';

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>
        </li>
    )
}

export {
    Record
}

export default class ItemDetails extends Component {
    /* State */

    state = {
        item: null,
        image: null
    }

    /* LifeCycles */

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        const { itemId } = this.props;

        if (itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    /* Events */

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({ item,
                    image: getImageUrl(item)
                 });
            });
    }

    /* Render */

    render() {

        const { item, image } = this.state;

        if (!item) {
            return <span>Select a item from a list</span>
        }

        const { name } = item;

        return (
            <div className="item-details card">
                <img className="item-image"
                            src={image}
                            alt="hero" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        { React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item });
                        }) }
                    </ul>
                </div>
            </div>
    )
  }
}