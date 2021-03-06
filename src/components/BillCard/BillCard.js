import React from 'react';
import moment from 'moment';
import './BillCard.scss';

const BillCard = ({ title, amount, paidBy, participants, date }) => (
  <div className="BillCard">
    <h4>{title}</h4>
    <p className="right">Tk {new Intl.NumberFormat().format(amount)}</p>
    <p>Paid by {paidBy}</p>
    <p className="right">{participants.length} pax</p>
    <p>
      <time>{moment(date).calendar(null, { sameElse: 'MMM Do YYYY' })}</time>
    </p>
  </div>
);

export default BillCard;
