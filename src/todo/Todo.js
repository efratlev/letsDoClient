import React, { Component } from 'react';
import './Todo.css';
import {  withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Task from '../task/Task';
import NewTask from '../task/NewTask'
import NewTask1 from '../task/NewTask'
import About from '../About';
import Service from '../service/Service';
import EditTask from '../editTask/EditTask';
import ViewTask from '../task/ViewTask';
import Sort from '../sort/Sort';
import ToDoList from './ToDoList';


import { Prompt } from 'react-router'
const service = new Service();
const MyComponent = () => (
  <React.Fragment>
    <Prompt
      when={true}
      message='You have unsaved changes, are you sure you want to leave?'
    />
    {/* Component JSX */}
  </React.Fragment>
)


class Todo extends Component {

  constructor(props) {
    super(props);   
    this.state = {
      arr: {}
    };    
    this.deleteTask = this.deleteTask.bind(this);
    this.saveStatus = this.saveStatus.bind(this)
  }
 
  componentDidMount() {
  //  this.props.history.listen(this.onRouteChange.bind(this));
    this.setState({ taskArr: service.getTaskListByUser(this.props.userId) });
    
  } 
  
  deleteTask(task) {
    debugger
    service.deleteTask(task._id, this);
  }

  /* componentDidUpdate = () => {
    if (false) {
      window.onbeforeunload = () => true
     alert('ddddddddd');
    } else {
      
    }
  } */

 // onRouteChange(route) {
  //  alert('sss');
  //  window.onbeforeunload = () => true
 // } 

 saveStatus(task)
 {
   debugger
  let statusNum = task.status + 1;
  if (statusNum > 4)
  {
    statusNum = 1;
  }
   let obj = {};
   obj.status = statusNum;
   obj._id=task._id;
   service.updateStatus(obj, this); 
 }

  renderTask(task) {    
    return (
      <div>
        <Task deleteTask={()=>this.deleteTask(task)} value={task} saveStatus={()=>this.saveStatus(task)}/>
      </div>
    );
  }

  render() {
    return this.state.taskArr!=null&&this.state.taskArr.length
    ?(   
      <List >
        {this.state.taskArr.map(item =>
          this.renderTask(item))
        }
      </List >     
      ):'Loading...';
    }
  }

export default withRouter(Todo);