import React from 'react';
import './Footer.css';

const Footer = props => {
  return (
    <div className="nav p-1 bg-light justify-content-center">
      <ul className="nav">
        <li className="nav-item pr-3">
          <a className="nav-link mt-1" href="#">
            <span>
              <i className="fas fa-blog" />
            </span>{' '}
            Basic Blog
          </a>
        </li>
        <li className="nav-item pr-3">
          {' '}
          <a className="nav-link" href="www.linkedin.com/in/estevaano">
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/EsTrevino">
            <i className="fab fa-github fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
