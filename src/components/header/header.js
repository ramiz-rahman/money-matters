import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = props => (
  <header className="Header">
    <p>
      <Link to="/">Money Matters</Link>
    </p>
  </header>
);

export default Header;
