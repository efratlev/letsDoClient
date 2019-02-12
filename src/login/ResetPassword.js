import React, { Component } from 'react';
import './ResetPassword.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Input extends React.Component {
  render() {
    return <div className='Input'>
              <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autocomplete='false'/>
              <label for={ this.props.name } ></label>
           </div>
  }

}

class ResetPassword extends Component {
    
  constructor(props) {
    super(props);
    this.resetPassword = this.resetPassword.bind(this);
  }

  resetPassword() {
    alert("send email to the user with new password");
  }

  render() {
    return (      
      <div className="App-header">     
        <div className='ResetPassword'>
          <h3>Forgot Password?</h3>
          <form onSubmit={this.resetPassword}>
            <Input type='text' name='username' placeholder='username' />           
            <button>Send</button>
          </form>
          
        </div>
      </div>       
    );
  }
}

export default ResetPassword;
