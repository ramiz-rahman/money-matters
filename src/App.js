import React, { Component } from 'react';
import Header from './components/header/header';
import Bill from './components/Bill/Bill';
import BillDetail from './components/BillDetail/BillDetail';
import { Bills } from './shared/Bills';
import './App.scss';

class App extends Component {
  state = {
    BILLS: Bills
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Bill
          title="Wok &amp; Fire"
          amount="306"
          paidBy="Ramiz"
          participants="1"
          date="2019-01-21 20:16"
        />
        <Bill
          title="Burger King Gulshan 2"
          amount="319"
          paidBy="Ramiz"
          participants="1"
          date="2019-01-17 21:01"
        />
        <Bill
          title="KFD and Cheez"
          amount="2035"
          paidBy="Shorna"
          participants="5"
          date="2018-10-15 20:16"
        />
        <Bill
          title="Nandos"
          amount="4785"
          paidBy="Roland"
          participants="7"
          date="2018-12-24 20:16"
        />

        <BillDetail
          id={this.state.BILLS[0].id}
          title={this.state.BILLS[0].title}
          date={this.state.BILLS[0].date}
          paidBy={this.state.BILLS[0].paidBy}
          participants={this.state.BILLS[0].participants}
          amount={this.state.BILLS[0].amount}
        />
      </div>
    );
  }
}

export default App;
