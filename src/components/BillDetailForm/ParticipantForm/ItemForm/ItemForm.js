import React, { Component } from 'react';
import './ItemForm.scss';

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.item.name,
      price: props.item.price
    };
  }

  handleNameChange = event => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  };

  handlePriceChange = event => {
    event.preventDefault();
    this.setState({ price: event.target.value });
  };

  render() {
    return (
      <div className="ItemForm">
        <div>
          <label htmlFor={'itemName'}>Item Name</label>
          <input
            type="text"
            id={'itemName'}
            name={'itemName'}
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <label htmlFor={'itemPrice'}>Item Price</label>
          <input
            type="text"
            id={'itemPrice'}
            name={'itemPrice'}
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
        </div>
      </div>
    );
  }
}

export default ItemForm;
