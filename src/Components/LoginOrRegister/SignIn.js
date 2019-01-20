import React, { Component } from 'react';
import TopHeader from '../LoginOrRegister/Header';
import '../LoginOrRegister/register.css';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formControls: {
        email: {
          value: ''
        },
        password: {
          value: ''
        }
      }
    };
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        [name]: value
      }
    });
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <TopHeader />
        <div className="col-xs-12 col-md-6 m-auto shadow-sm p-5 bg-white rounded">
          <form className="col-12 m-auto">
            <h2>Sign In</h2>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                value={this.state.formControls.email.value}
                onChange={this.handleChange}
                className="form-control"
                id="exampleInputEmail1"
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
                name="password"
                value={this.state.formControls.password.value}
                onChange={this.handleChange}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
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

export default SignIn;
