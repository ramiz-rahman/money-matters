import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Bill from './components/Bill/Bill';
import BillDetail from './components/BillDetail/BillDetail';
import BillDetailForm from './components/BillDetailForm/BillDetailForm';
import { Bills } from './shared/Bills';
import './App.scss';

const ListOfBills = ({ bills = [] }) => {
  return bills.map((bill, index) => (
    <Link to={`/bill/${index}`} key={bill.id}>
      <Bill
        id={bill.id}
        title={bill.title}
        amount={bill.amount}
        paidBy={bill.paidBy}
        participants={bill.participants}
        date={bill.date}
      />
    </Link>
  ));
};

const CreateBillButton = props => <Link to="/createBill">Create New Bill</Link>;

const HomeScreen = ({ bills = [] }) => (
  <>
    <ListOfBills bills={bills} />
    <CreateBillButton />
  </>
);

const BillDetailScreen = ({ match, bills }) => {
  const index = match.params.index;
  const bill = bills[index];
  return (
    <BillDetail
      id={bill.id}
      title={bill.title}
      amount={bill.amount}
      paidBy={bill.paidBy}
      participants={bill.participants}
      date={bill.date}
    />
  );
};

class App extends Component {
  state = {
    BILLS: Bills
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomeScreen bills={this.state.BILLS} />}
          />
          <Route
            exact
            path="/bill/:index"
            render={props => (
              <BillDetailScreen bills={this.state.BILLS} {...props} />
            )}
          />
          <Route exact path="/createBill" component={BillDetailForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
