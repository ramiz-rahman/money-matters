import React, { Component } from 'react';

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
      <div style={{ color: 'blue' }}>
        <div>
          <label htmlFor={'name'}>Name</label>
          <input
            type="text"
            id={'name'}
            name={'name'}
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <label htmlFor={'price'}>Price</label>
          <input
            type="text"
            id={'price'}
            name={'price'}
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
        </div>
      </div>
    );
  }
}

export default ItemForm;
