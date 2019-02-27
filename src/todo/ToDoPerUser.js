import React, { Component } from 'react';
import './Todo.css';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import Member from '../login/Member';
import Todo from './Todo';
import Service from '../service/Service';
import { debug } from 'util';

const axios = require('axios');

const service = new Service();

class ToDoPerUser extends Component {

  constructor(props) {
    super(props);    
    this.state = {
     collapse:{},
     members:[]
    };
    //this.componentDidMount=this.componentDidMount.bind(this);
    //this.axios
  }

  setStatePls(res)
  {
    debugger
    this.setState({ groups: res.data })
  }

  componentDidMount()
  {
    debugger
    service.getUserListByGroup(this); 
  }
  
  collapseTasks(id) {
    let arr={};
    arr=this.state.collapse;
    arr[id]=!this.state.collapse[id]
    this.setState({ collapse: arr });
  };

  renderTask(member) {
    return(
      <div>
    <ListItem button  onClick={() => this.collapseTasks(member._id)}>
      <Member username={member.userName} id={member._id} img={member.img?member.img:'avatar'}></Member>      
     </ListItem>
      <Collapse in={this.state.collapse[member._id]} timeout="auto" unmountOnExit style={{paddingLeft: '70px'}}>
      <Todo userId={member._id}></Todo>
    </Collapse>
    </div>
      )
  }

  render() {  
    debugger;  
      return this.state.members!=null&&this.state.members.length
      ?(    
      <List
        component="nav"
        subheader={<ListSubheader component="div">Group List Items</ListSubheader>}
        className="root">
        {this.state.members.map(member => 
           this.renderTask(member))
        }
      </List>
    ):null
  }  
}

export default ToDoPerUser;