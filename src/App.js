import React, { Component } from 'react';
import Header from './components/header/header';
import Bill from './components/Bill/Bill';
import './App.scss';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
