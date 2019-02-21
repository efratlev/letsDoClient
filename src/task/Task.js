import React, { Component } from 'react';
import './Task.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Service from '../service/Service';
import Status from '../components/Status';

//const service = new Service();

class Task extends Component {
  state = {
    checked: [0],
  };

  editTask(task) {
    let path = './ViewTask';
    this.props.history.push({
      pathname: path,
      state: task
    })  
  }

  deleteTask(task) {
    //service.deleteTask(task.id, this);
  }

  saveStatus(task)
  {
    //save status change before living this page
  }

  render() {
    return (
      <div className="App-header">
        <ListItem dense button>       
          <ListItemText primary={this.props.value.taskName} secondary={this.props.value.description}/>
          <IconButton aria-label="Delete" onClick={()=>this.deleteTask(this.props.value)} >
            <DeleteIcon/>
          </IconButton>
          <IconButton aria-label="Delete" onClick={()=>this.editTask(this.props.value)}>
          <EditIcon/>    
      </IconButton>
      <Status status={this.props.value.status}></Status>
    </ListItem>
    </div>
      );
    }
  }
  export default Task;
