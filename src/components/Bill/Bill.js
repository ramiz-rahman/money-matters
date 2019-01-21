import React from 'react';
import moment from 'moment';
import './Bill.scss';

const Bill = ({ title, amount, paidBy, participants, date }) => (
  <div className="Bill">
    <h4>{title}</h4>
    <p className="right">Tk {new Intl.NumberFormat().format(amount)}</p>
    <p>Paid by {paidBy}</p>
    <p className="right">{participants} pax</p>
    <p>
      <time>{moment(date).calendar(null, { sameElse: 'MMM Do YYYY' })}</time>
    </p>
  </div>
);

export default Bill;
