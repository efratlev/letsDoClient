import React, { Component } from 'react';
import './Todo.css';
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
const service = new Service();

class Todo extends Component {

  constructor(props) {
    super(props);   
    this.state = {
      arr: {}
    };
  }
 
  componentWillMount() {
    this.setState({ arr: service.getList() });
  } 

  renderTask(task) {    
    return (
      <div>
        <Task value={task}/>
      </div>
    );
  }

  render() {
    return (
      <List >
        {this.state.arr.map(item =>
          this.renderTask(item))
        }
      </List >     
      );
    }
  }

export default Todo;