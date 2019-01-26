import React from 'react';
import { Link } from 'react-router-dom';
import BillCardList from '../components/BillCardList/BillCardList';

const CreateBillButton = props => <Link to="/createBill">Create New Bill</Link>;

const HomeScreen = ({ bills = [] }) => (
  <>
    <BillCardList bills={bills} />
    <CreateBillButton />
  </>
);

export default HomeScreen;
