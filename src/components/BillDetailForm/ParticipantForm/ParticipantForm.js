import React, { Component } from 'react';
import ItemForm from './ItemForm/ItemForm';
import './ParticipantForm.scss';

class ParticipantForm extends Component {
  handleNameChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const participant = { ...this.props.participant };
    participant.name = value;
    this.props.onChange(participant, this.props.index, event);
  };

  handleAddItem = event => {
    event.preventDefault();
    const participant = { ...this.props.participant };
    participant.items.push({ name: '', price: '' });
    this.props.onChange(participant, this.props.index, event);
  };

  handleDeleteItem = (deletedItem, event) => {
    event.preventDefault();
    const participant = { ...this.props.participant };
    participant.items = participant.items.filter(item => item !== deletedItem);
    this.props.onChange(participant, this.props.index, event);
  };

  handleChangeItem = (item, index, event) => {
    event.preventDefault();
    const participant = this.props.participant;
    participant.items[index] = item;
    this.props.onChange(participant, this.props.index, event);
  };

  render() {
    return (
      <div className="ParticipantForm">
        <div>
          <label htmlFor={`participantName`}>Name</label>
          <input
            type="text"
            id={`participantName`}
            name={`participantName`}
            value={this.props.participant.name}
            onChange={this.handleNameChange}
          />
        </div>

        {this.props.participant.items.map((item, i) => (
          <ItemForm
            key={i}
            index={i}
            item={item}
            onChange={this.handleChangeItem}
            onDelete={this.handleDeleteItem}
          />
        ))}
        <button onClick={this.handleAddItem}>Add Item</button>
      </div>
    );
  }
}

export default ParticipantForm;
