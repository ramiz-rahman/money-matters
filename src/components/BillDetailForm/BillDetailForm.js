import React, { Component } from 'react';
import ParticipantForm from './ParticipantForm/ParticipantForm';
import './BillDetailForm.scss';

class BillDetailForm extends Component {
  bill = this.props.bill;
  state = {
    title: (this.bill && this.bill.title) || '',
    date: (this.bill && this.bill.date) || '',
    amount: (this.bill && this.bill.amount) || '',
    paidBy: (this.bill && this.bill.paidBy) || '',
    participants: (this.bill && this.bill.participants) || [
      {
        name: 'Rana',
        items: [{ name: '', price: '' }]
      }
    ]
  };

  handleChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const field = event.target.name;
    this.setState(prevState => {
      prevState[field] = value;
      return { ...prevState };
    });
  };

  handleAddParticipant = event => {
    event.preventDefault();
    this.setState(prevState => ({
      participants: [...prevState.participants, { name: '', items: [] }]
    }));
  };

  handleChangeParticipant = (participant, index, event) => {
    event.preventDefault();
    this.setState(prevState => {
      let updatedParticipants = [...prevState.participants];
      updatedParticipants[index] = participant;
      return { participants: [...updatedParticipants] };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSave(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="BillDetailForm">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="paidBy">Paid By</label>
          <input
            type="text"
            id="paidBy"
            name="paidBy"
            value={this.state.paidBy}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </div>

        {this.state.participants.map((participant, i) => (
          <ParticipantForm
            key={i}
            index={i}
            participant={participant}
            onChange={this.handleChangeParticipant}
          />
        ))}

        <button onClick={this.handleAddParticipant}>Add Participant</button>
        <input type="submit" />
      </form>
    );
  }
}

export default BillDetailForm;
