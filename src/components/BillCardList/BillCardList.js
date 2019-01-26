import React from 'react';
import { Link } from 'react-router-dom';
import BillCard from '../BillCard/BillCard';
const BillCardList = ({ bills = [] }) => {
  return bills.map(bill => (
    <Link to={`/bill/${bill.id}`} key={bill.id}>
      <BillCard
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

export default BillCardList;
