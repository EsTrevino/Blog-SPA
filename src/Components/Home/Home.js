import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div>
        <div className="main-top">
          <div className="row inner-top">
            <div className="col-11 m-auto text-sm-left mt-5 pt-5">
              <h1 className="text-uppercase pt-5">
                Engaging Purposeful <br />
                <span>and Creative</span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-11 m-auto text-sm-left pt-3">
              <button className="btn btn-success btn-lg">Go To Blog</button>
            </div>
          </div>
        </div>
        <div className="main-bottom container"> </div>
      </div>
    );
  }
}

export default Home;
