import React, { Component } from 'react';
import TopHeader from '../LoginOrRegister/Header';
import '../LoginOrRegister/register.css';

class Register extends Component {
  render() {
    return (
      <div>
        <TopHeader />
        <div className="col-xs-12 col-md-6  m-auto shadow-sm p-5 bg-white rounded">
          <form className="col-12 m-auto">
            <h2>Register</h2>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Verify Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Verify Password"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
