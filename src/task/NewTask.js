import React, { Component } from 'react';
import './NewTask.css';
import Service from "../service/Service"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
//import DateFnsUtils from '@date-io/date-fns';
//import Grid from '@material-ui/core/Grid';

const service = new Service();

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const priorities = [
  {
    value: '1',
    label: 'high',
  },
  {
    value: '2',
    label: 'medium',
  },
  {
    value: '3',
    label: 'low',
  },
];

const contacts = [
  {
    value: '1',
    label: 'Yair',
  },
  {
    value: '2',
    label: 'Nechama',
  },
  {
    value: '3',
    label: 'Shira',
  },
];

class NewTask extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      _id: '',
      priority: '',
      assignedTo: '5c6c53b9cd2522001760837f'//temp- we need to do calculate of user id by user name
    }
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
    obj.assignedId = localStorage.getItem('userId');//this.state.assignedTo;- need to change temporary value
    obj.priority = this.state.priority;
    obj.status = 0;
    service.createNewTask(obj, this);
  }

  render() {
    return (
      <div>
      <Grid className="container" container spacing={24}>
      <Grid item xs={3}>
        <Paper className="paper">xs=3</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className="paper">xs=3</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className="paper">xs=3</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className="paper">xs=3</Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className="paper">xs=8</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="paper">xs=4</Paper>
      </Grid>
    </Grid>
      <form className="container" autoComplete="off" >
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
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="filled"
          onChange={this.handleChange('description')}
        />
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          className="textField"
          InputLabelProps={{
            shrink: true,
          }}
        />
         
        <TextField
          id="filled-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('priority')}
          type="number"
          className="textField"
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-select-currency-native"
          select
          label="Native select"
          className="textField"
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: "menu"
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="filled"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="assigned to"
          className="textField"
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: "menu"
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="filled"
        >
          {contacts.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="priority"
          className="textField"
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: "menu"
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="filled"
        >
          {priorities.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <br />
        <Button onClick={this.handleSubmit.bind(this)} variant="contained" color="primary" >
          create
     </Button>
      </form></div>
    );
  }
}
export default NewTask;
