import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';
import './Home.css';
import SignUp from './login/SignUp';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isShow: true,
      users:{}
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    return (
      <div className="App-header"> 
       
        <a href="/SignIn">Sign In</a>
        <a href="/NewGroup">New Group</a>
      </div>
    );
  }
}

export default Home;
