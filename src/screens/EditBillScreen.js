import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import BillDetailForm from '../components/BillDetailForm/BillDetailForm';

class EditBillScreen extends Component {
  state = {
    redirect: false
  };

  id = Number(this.props.match.params.id);
  currentBill = this.props.bills.find(bill => bill.id === this.id);

  onEdit = newBill => {
    const billWithID = { ...newBill, id: this.currentBill.id };
    this.props.onEdit(billWithID);
    this.setState({ redirect: true });
  };

  render() {
    return (
      <>
        <BillDetailForm onSave={this.onEdit} bill={this.currentBill} />
        {this.state.redirect && <Redirect to="/" />}
      </>
    );
  }
}
export default EditBillScreen;
