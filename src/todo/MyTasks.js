import React, { Component } from 'react';
import './Todo.css';
import {  withRouter} from 'react-router-dom';
import List from '@material-ui/core/List';
import Task from '../task/Task';
import Service from '../service/Service';


import { Prompt } from 'react-router'
import Loading from '../components/Loading';
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


class MyTasks extends Component {

  constructor(props) {
    super(props);   
    this.state = {
      arr: {}
    };    
    this.deleteTask = this.deleteTask.bind(this);
    this.saveStatus = this.saveStatus.bind(this)
  }
 
  componentDidMount() {
    service.retrieveMyTasks(this);
    
  } 
  
  deleteTask(task) {
    debugger
    service.deleteTask(task._id, this);
  }

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
      <List style={{margin:  '40px'} }>
        {this.state.taskArr.map(item =>
          this.renderTask(item))
        }
      </List >     
      ):<Loading></Loading>;
    }
  }

export default withRouter(MyTasks);