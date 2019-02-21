import React, { Component } from 'react';
import './AddMember.css';
import Service from "../service/Service"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const service = new Service();

class ApprovedInvite extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      _id:'',
      priority:''
    }
  }
 
  addMember(event) {
  let obj = {};
  obj.name = this.state.name;
  obj.description = this.state.description;
  obj.id = this.state.priority;
  obj.priority = this.state.priority;
  obj.status= 0;
   this.setState({obj:service.insertItem(obj) });
   this.props.history.push('/ToDoList')
  }

  render() {
    return (
     <Button onClick="addMember" variant="contained" color="primary" >
       I want to be part of this group
     </Button>
    );
  }
}
export default ApprovedInvite;
