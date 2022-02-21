import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.scss';

const Navigation = () => (
  <header>
    <nav>
      <ul className="nav nav-parent">
        <li>
          <ul className="nav">
            <li> Logo </li>
            <li><Link to="/"> Books </Link></li>
            <li><Link to="categories"> Categories </Link></li>
          </ul>
        </li>
        <li id="login"> Login </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
