import React, { Component } from 'react';
import ParticipantForm from './ParticipantForm/ParticipantForm';

class BillDetailForm extends Component {
  state = {
    title: '',
    date: '',
    amount: '',
    paidBy: '',
    participants: [
      {
        name: 'Rana',
        items: [{ name: '', price: '' }]
      }
    ]
  };

  handleTitleChange = event => {
    event.preventDefault();
    this.setState({ title: event.target.value });
  };

  handleAmountChange = event => {
    event.preventDefault();
    this.setState({ amount: event.target.value });
  };

  handleDateChange = event => {
    event.preventDefault();
    this.setState({ date: event.target.value });
  };

  handlePaidByChange = event => {
    event.preventDefault();
    this.setState({ paidBy: event.target.value });
  };

  handleAddParticipant = event => {
    event.preventDefault();
    this.setState(prevState => ({
      participants: [...prevState.participants, { name: '', items: [] }]
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(
      data.get('title'),
      data.get('amount'),
      data.get('date'),
      data.get('paidBy'),
      data.get('participantName_1')
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
        </div>

        <div>
          <label htmlFor="paidBy">Paid By</label>
          <input
            type="text"
            id="paidBy"
            name="paidBy"
            value={this.state.paidBy}
            onChange={this.handlePaidByChange}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </div>

        {this.state.participants.map((participant, i) => (
          <ParticipantForm key={i} participant={participant} />
        ))}

        <button onClick={this.handleAddParticipant}>Add Participant</button>
        <input type="submit" />
      </form>
    );
  }
}

export default BillDetailForm;
