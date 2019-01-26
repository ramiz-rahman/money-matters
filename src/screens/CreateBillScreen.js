import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BillDetailForm from '../components/BillDetailForm/BillDetailForm';

class CreateBillScreen extends Component {
  state = {
    redirect: false
  };

  onCreate = bill => {
    this.props.onCreate(bill);
    this.setState({ redirect: true });
  };

  render() {
    return (
      <>
        <BillDetailForm onSave={this.onCreate} />
        {this.state.redirect && <Redirect to="/" />}
      </>
    );
  }
}

export default CreateBillScreen;
