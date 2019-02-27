import React, { Component } from 'react';
import './DetailsTask.css';
import Service from '../service/Service';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment'

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

const service = new Service();

class ViewTask extends Component {
  constructor(props) {
    super(props);
    this.backToList = this.backToList.bind(this);
    this.state = {
      members: [],
      id: '',
      taskName: '',
      description: '',
      priority: '',
      status: '',
      assignedTo: '',
      targetDate: '',
      comments: ''
    }
  }

  componentWillMount() {
    debugger
    this.setState({
      taskName: this.props.location.state.taskName,
      description: this.props.location.state.description,
      priority: this.props.location.state.priority,
      id: this.props.location.state._id,
      status: this.props.location.state.status,
      assignedTo: this.props.location.state.assignedTo,
      targetDate:  this.formatDate(this.props.location.state.targetDate),
      comments: this.props.location.state.comments,
    });
    // let Date= new Date;
    // Date= this.state.targetDate;
  }

  componentDidMount() {
    debugger
    service.getUserListByGroup(this);
   
  }

  backToList() {
    debugger
    this.props.history.goBack();
  }

  handleChange = prop => event => {
    let obj = {};
    obj[prop] = event.target.value;
    this.setState(obj);
  }

  saveChanges() {
    debugger
    let obj = {};
    obj._id = this.state.id;
    obj.taskName = this.state.taskName;
    obj.description = this.state.description;
    obj.priority = this.state.priority;
    obj.status = this.state.status;
    obj.assignedTo = this.state.assignedTo;
    obj.comments = this.state.comments;
    obj.targetDate = this.state.targetDate;
    service.updateTask(obj, this);
  }

  formatDate(dateString) {  
    var dateObj = new Date(dateString);
    var momentObj = moment(dateObj);
    var momentString = momentObj.format('YYYY-MM-DD');
    return momentString;
  }

  render() {
    return this.state.members != null && this.state.members.length ? (
      <Paper className="paper">
        <form className="container" autoComplete="off" >
          <h3>Task : {this.state.taskName}</h3>
          <br />
          <TextField
            required
            id="filled-name"
            label="Name"
            className="textField"
            value={this.state.taskName}
            onChange={this.handleChange('taskName')}
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
            InputLabelProps={{
              shrink: true,
            }}
            className="textField"
            defaultValue={this.state.targetDate}
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
          <Button className="btn" variant="contained" color="primary" onClick={this.saveChanges.bind(this)}>
            save
            </Button>
          <Button className="btn" variant="contained" color="primary" onClick={this.backToList}>
            back
            </Button>
        </form>
      </Paper>
    ) : null;
  }
}
export default ViewTask;
