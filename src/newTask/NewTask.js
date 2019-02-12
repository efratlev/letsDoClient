import React, { Component } from 'react';
import './NewTask.css';
import Service from "../service/Service"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      _id:'',
      priority:''
    }
  }

  handleChange = prop => event => {
    let obj = {};
    obj[prop]=event.target.value;
    this.setState(obj);   
  }
 
  handleSubmit(event) {
  let obj = {};
  obj.name = this.state.name;
  obj.description = this.state.description;
  obj.id = this.state.priority;
  obj.priority = this.state.priority;
  obj.status= 0;
   this.setState({obj:service.insertItem(obj) });
   this.props.history.push('/ToDoList')
  }

  render() {
    return (
      <form className="container"  autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
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
      <br/>
       <Button type="submit" variant="contained" color="primary" >
       create
     </Button>
      </form>
    );
  }
}
export default NewTask;
