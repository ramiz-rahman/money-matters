import React from 'react';
import moment from 'moment';
import ParticipantBill from '../ParticipantBill/ParticipantBill';
import './BillDetail.scss';

const _getDue = (participants = []) => {
  const due = participants
    .filter(participant => !participant.cleared)
    .map(participant =>
      participant.items
        .map(item => Number(item.price))
        .reduce((val, sum) => sum + val)
    )
    .reduce((val, sum) => sum + val);

  return due;
};

const ParticipantBillList = ({ participants }) => (
  <ul>
    {participants.map((participant, i) => (
      <li key={i}>
        <ParticipantBill participant={participant} id={i} />
      </li>
    ))}
  </ul>
);

const BillDetail = ({ id, date, title, amount, paidBy, participants }) => (
  <div className="BillDetail">
    <header>
      <p>#{id.toString().padStart(5, 0)}</p>
      <p>{moment(date).calendar(null, { sameElse: 'MMM Do YYYY' })}</p>
    </header>

    <h4>{title}</h4>
    <p>
      <span>Total:</span>{' '}
      <span>Tk {new Intl.NumberFormat().format(amount)}</span>
    </p>

    <p>
      <span>Due:</span>{' '}
      <span>Tk {new Intl.NumberFormat().format(_getDue(participants))}</span>
    </p>

    <p>Please pay to {paidBy}</p>

    <ParticipantBillList participants={participants} />
  </div>
);

export default BillDetail;
