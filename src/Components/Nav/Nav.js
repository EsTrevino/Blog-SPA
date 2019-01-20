import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const NavBar = ({ name }) => {
  return (
    <nav className="navbar navbar-expand-sm p-3">
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <a className="navbar-brand " href="#">
          <span>
            <i className="fas fa-blog" />
          </span>{' '}
          Basic Blog
        </a>
      </Link>
      {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
      <div className="navbar-nav ">
        <ul className="nav">
          <li className="nav-item" />
          <li className="nav-item">
            <Link style={{ textDecoration: 'none' }} to={'/blog'}>
              <a className="nav-link" href="#">
                Blog
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: 'none' }} to={'/signin'}>
              <a className="nav-link" href="#">
                Sign In
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: 'none' }} to={'/register'}>
              <a className="nav-link" href="#">
                Register
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
