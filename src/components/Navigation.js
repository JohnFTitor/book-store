import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import '../styles/navigation.scss';

const Navigation = () => (
  <header>
    <nav>
      <ul className="nav nav-parent">
        <li>
          <ul className="nav">
            <li id="logo"> BookStore CMS </li>
            <li><Link to="/"> Books </Link></li>
            <li><Link to="categories"> Categories </Link></li>
          </ul>
        </li>
        <li id="login">
          <div className="oval">
            <ImUser />
          </div>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
