import React from 'react';
import { Link } from 'react-router-dom';
import BillDetail from '../components/BillDetail/BillDetail';

const EditBillButton = ({ id }) => (
  <Link to={`/bill/${id}/edit`}>Edit Bill </Link>
);

const DeleteBillButton = props => <Link to="deleteBill">Delete Bill</Link>;

const ReadBillScreen = ({ match, bills }) => {
  const id = Number(match.params.id);
  const bill = bills.find(bill => {
    console.log(bill.id);
    return bill.id === id;
  });
  return (
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
      <DeleteBillButton />
    </>
  );
};

export default ReadBillScreen;
