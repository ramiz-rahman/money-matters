import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import BillDetail from '../components/BillDetail/BillDetail';

const EditBillButton = ({ id }) => (
  <Link to={`/bill/${id}/edit`}>Edit Bill </Link>
);

const DeleteBillButton = ({ onClick }) => (
  <button onClick={onClick}>Delete Bill</button>
);

const DeleteConfirmationModal = ({ onConfirm, bill }) => (
  <div>
    <p>Are you sure you wish to delete the page</p>
    <button onClick={event => onConfirm(bill, event)}>Delete</button>
  </div>
);

class ReadBillScreen extends Component {
  state = {
    redirect: false,
    confirmation: false
  };

  handleDelete = event => {
    event.preventDefault();
    this.setState({ confirmation: true });
  };

  handleDeleteConfirm = (bill, event) => {
    event.preventDefault();
    this.setState(
      prevState => ({ ...prevState, redirect: true }),
      this.props.onDelete(bill)
    );
  };

  render() {
    const id = Number(this.props.match.params.id);
    const bill = this.props.bills.find(bill => {
      return bill.id === id;
    });

    return (
      <>
        {bill ? (
          <>
            <BillDetail
              id={bill.id}
              title={bill.title}
              amount={bill.amount}
              paidBy={bill.paidBy}
              participants={bill.participants}
              date={bill.date}
            />
            <EditBillButton id={bill.id} />
            <DeleteBillButton onClick={this.handleDelete} />
            {this.state.confirmation && (
              <DeleteConfirmationModal
                onConfirm={this.handleDeleteConfirm}
                bill={bill}
              />
            )}
          </>
        ) : (
          <h1>This bill does not exist</h1>
        )}
        {this.state.redirect && <Redirect to="/" />}
      </>
    );
  }
}

export default ReadBillScreen;
