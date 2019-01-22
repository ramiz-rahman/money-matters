import React from 'react';
import './ParticipantBill.scss';

const _getTotalPrice = items => {
  return new Intl.NumberFormat().format(
    items
      .map(item => Number(item.price))
      .reduce((price, total) => total + price)
  );
};

const ParticipantAction = ({ cleared }) =>
  cleared ? <button disabled>cleared</button> : <button>paid</button>;

const RenderItem = ({ item }) => (
  <li>
    <span>{item.name}</span>
    <span>Tk {item.price}</span>
  </li>
);

const ItemList = ({ items }) => (
  <ul>
    {items.map(item => (
      <RenderItem item={item} />
    ))}
  </ul>
);

const ParticipantBill = ({ participant }) => (
  <div className="ParticipantBill">
    <header>
      <h4>{participant.name}</h4>
    </header>

    <ItemList items={participant.items} />

    <footer>
      <ParticipantAction cleared={participant.cleared} />
      <p>Tk. {_getTotalPrice(participant.items)}</p>
    </footer>
  </div>
);

export default ParticipantBill;
