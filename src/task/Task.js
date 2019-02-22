import React, { Component } from 'react';
import './Task.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Route , withRouter} from 'react-router-dom';
import Service from '../service/Service';
import Status from '../components/Status';

 

class Task extends Component {
  state = {
    checked: [0],
    deletedInd:false
  };

  editTask(task) {
    debugger
    let path = './ViewTask';
    this.props.history.push({
      pathname: path,
      state: task
    })  
  }   

  render() {
    return(
      <div className="App-header">
        <ListItem dense button>       
          <ListItemText primary={this.props.value.taskName} secondary={this.props.value.description}/>
          <IconButton aria-label="Delete" onClick={this.props.deleteTask} >
            <DeleteIcon/>
          </IconButton>
          <IconButton aria-label="Delete" onClick={()=>this.editTask(this.props.value)}>
          <EditIcon/>      
      </IconButton>
      <Status status={this.props.value.status} objId={this.props.value._id} saveStatus={this.props.saveStatus}></Status>
    </ListItem>
    </div>
      );
    }
  }
  export default withRouter(Task);
