import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen';
import ReadBillScreen from './screens/ReadBillScreen';
import CreateBillScreen from './screens/CreateBillScreen';
import EditBillScreen from './screens/EditBillScreen';
import { Bills } from './shared/Bills';
import './App.scss';

class App extends Component {
  state = {
    BILLS: Bills
  };

  handleCreate = bill => {
    this.setState(prevState => {
      bill.id = prevState.BILLS.length;
      return { BILLS: [bill, ...prevState.BILLS] };
    });
  };

  handleEdit = bill => {
    this.setState(prevState => {
      const index = prevState.BILLS.findIndex(
        prevBill => prevBill.id === bill.id
      );
      const updatedBills = [...prevState.BILLS];
      updatedBills[index] = { ...bill };
      return { BILLS: updatedBills };
    });
  };

  handleDelete = bill => {
    this.setState(prevState => {
      const updatedBills = prevState.BILLS.filter(
        prevBill => prevBill.id !== bill.id
      );
      return { BILLS: updatedBills };
    });
  };

  render() {
    console.log(this.state.BILLS);
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
            path="/bill/:id"
            render={props => (
              <ReadBillScreen
                onDelete={this.handleDelete}
                bills={this.state.BILLS}
                {...props}
              />
            )}
          />
          <Route
            path="/bill/:id/edit"
            render={props => (
              <EditBillScreen
                onEdit={this.handleEdit}
                bills={this.state.BILLS}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/createBill"
            render={() => <CreateBillScreen onCreate={this.handleCreate} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
