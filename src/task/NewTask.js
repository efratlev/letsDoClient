import React, { Component } from 'react';
import './DetailsTask.css';
import Service from "../service/Service"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import Paper from '@material-ui/core/Paper';


const service = new Service();

const priorities = [
  {
    value: 1,
    label: 'Low',
  },
  {
    value: 2,
    label: 'Medium',
  },
  {
    value: 3,
    label: 'High',
  },
];

class NewTask extends Component {

  constructor(props) {
    super(props)
    this.state = {
      members: [],
      name: '',
      description: '',
      _id: '',
      priority: '',
      assignedTo: '',
      targetDate: '',
      comments: ''
    }
  }

  componentDidMount() {
    debugger
    service.getUserListByGroup(this);
  }

  handleChange = prop => event => {
    let obj = {};
    obj[prop] = event.target.value;
    this.setState(obj);
  }

  handleSubmit(event) {
    let obj = {};
    obj.taskName = this.state.name;
    obj.description = this.state.description;
    obj.userId = localStorage.getItem('userId');
    obj.assignedId = this.state.assignedTo;
    obj.priority = this.state.priority;
    obj.comments = this.state.comments;
    obj.targetDate = this.state.targetDate;
    obj.status = 1;
    service.createNewTask(obj, this);
  }

  render() {
    return this.state.members != null && this.state.members.length
      ? (
        <Paper className="paper">
        
          <form className="container" autoComplete="off" >
            <h3>Create New Task</h3>
            <br/>
            <TextField
              required
              id="filled-name"
              label="Name"
              className="textField"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="filled"
            />
            <TextField
              id="filled-full-width"
              label="Description"
              value={this.state.description}
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.handleChange('description')}
            />
            <TextField
              id="date"
              label="Target Date"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
              className="textField"
              value={this.state.targetDate}
              onChange={this.handleChange('targetDate')}
              margin="normal"
              variant="filled"
            />
            <TextField
              id="filled-select-currency-native"
              select
              label="Assigned To"
              className="textField"
              value={this.state.assignedTo}
              onChange={this.handleChange('assignedTo')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: "menu"
                },
              }}
              margin="normal"
              variant="filled"
            >
              <option key='' value='' />
              {this.state.members.map(option => (
                <option key={option._id} value={option._id}>
                  {option.userName}
                </option>
              ))}
            </TextField>
            <TextField
              id="filled-select-currency-native"
              select
              label="Priority"
              className="textField"
              value={this.state.priority}
              onChange={this.handleChange('priority')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: "menu"
                },
              }}
              margin="normal"
              variant="filled"
            >
              <option key='' value='' />
              {priorities.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="filled-full-width"
              label="Comments"
              value={this.state.comments}
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.handleChange('comments')}
            />
            <br />
            <Button className="btn" onClick={this.handleSubmit.bind(this)} variant="contained" color="primary" >
              create
     </Button>
          </form></Paper>
      ) : null;
  }
}
export default NewTask;
