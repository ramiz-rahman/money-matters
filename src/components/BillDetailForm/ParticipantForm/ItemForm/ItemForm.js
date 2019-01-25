import React, { Component } from 'react';
import './ItemForm.scss';

class ItemForm extends Component {
  handleChange = event => {
    event.preventDefault();
    const field = event.target.name;
    const value = event.target.value;
    const item = this.props.item;
    item[field] = value;
    this.props.onChange(item, this.props.index, event);
  };

  render() {
    return (
      <div className="ItemForm">
        <div>
          <label htmlFor={'itemName'}>Item Name</label>
          <input
            type="text"
            id={'itemName'}
            name={'name'}
            value={this.props.item.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor={'itemPrice'}>Item Price</label>
          <input
            type="text"
            id={'itemPrice'}
            name={'price'}
            value={this.props.item.price}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default ItemForm;
