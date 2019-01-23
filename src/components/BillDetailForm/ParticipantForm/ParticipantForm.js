import React, { Component } from 'react';
import ItemForm from './ItemForm/ItemForm';
import './ParticipantForm.scss';

class ParticipantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.participant.name,
      items: props.participant.items
    };
  }

  handleNameChange = event => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  };

  handleAddItem = event => {
    event.preventDefault();
    this.setState(prevState => ({
      items: [...prevState.items, { name: '', price: '' }]
    }));
  };

  render() {
    return (
      <div className="ParticipantForm">
        <div>
          <label htmlFor={'participantName'}>Name</label>
          <input
            type="text"
            id={'participantName'}
            name={'participantName'}
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>

        {this.state.items.map((item, i) => (
          <ItemForm item={item} key={i} />
        ))}
        <button onClick={this.handleAddItem}>Add Item</button>
      </div>
    );
  }
}

export default ParticipantForm;
