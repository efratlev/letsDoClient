import React, { Component } from 'react';

class ViewGroup extends Component {
    
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback   
    this.signIn = this.signIn.bind(this);
  }

  backToList(){
    debugger
    this.props.history.goBack();  
  }  
  
  handleChange = prop => event => {
    let obj = {};
    obj[prop]=event.target.value;
    this.setState(obj);   
  }
  
  saveChanges() {
    debugger
    let obj = {};
    /* obj._id = this.state.priority;
    obj.name = this.state.name;
    obj.description = this.state.description;
    obj.priority = this.state.priority;
    obj.status=this.state.status;
    service.update(obj); */
    this.props.history.goBack();
  }
  
  render() {
    return (      
      <div className="App-header">     
              
          <h3>Manage Group</h3>
          <a href="/Test">add users</a>
        
      </div>       
    );
  }
}

export default ViewGroup;
