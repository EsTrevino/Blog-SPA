import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import SignIn from './Components/LoginOrRegister/SignIn';
import Register from './Components/LoginOrRegister/Register';
import './App.css';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/register" component={Register} />

      <Footer />
    </div>
  </Router>
);

export default App;
