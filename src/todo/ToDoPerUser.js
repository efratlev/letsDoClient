import React, { Component } from 'react';
import './Todo.css';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import Member from '../login/Member';
import Todo from './Todo';
import Service from '../service/Service';

const service = new Service();

class ToDoPerUser extends Component {

  constructor(props) {
    super(props);    
    this.state = {
     collapse:{}
    };
  }
  
  collapseTasks(id) {
    let arr={};
    arr=this.state.collapse;
    arr[id]=!this.state.collapse[id]
    this.setState({ collapse: arr });
  };

  renderTask(contact) {
    return(
      <div>
    <ListItem button  onClick={() => this.collapseTasks(contact.id)}>
      <Member username={contact.username} id={contact.id}></Member>      
     </ListItem>
      <Collapse in={this.state.collapse[contact.id]} timeout="auto" unmountOnExit style={{paddingLeft: '70px'}}>
      <Todo></Todo>
    </Collapse>
    </div>
      )
  }

  render() {
    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div">Group List Items</ListSubheader>}
        className="root">
        {service.getUserListByGroup().map(contact => 
           this.renderTask(contact))
        }
      </List>
    );
  }  
}

export default ToDoPerUser;