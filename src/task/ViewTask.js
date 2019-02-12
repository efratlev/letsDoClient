import React, { Component } from 'react';
import './ViewTask.css';
import Service from '../service/Service';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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

const service = new Service();

class ViewTask extends Component {
  constructor(props) {
    super(props);
    this.backToList = this.backToList.bind(this);
    this.state = {
      id: '',
      name: '',
      description: '',
      priority: '',
      status:''
    }
  }

  componentWillMount() {
    this.setState({ name: this.props.location.state.name });
    this.setState({ description: this.props.location.state.description });
    this.setState({ priority: this.props.location.state.priority });
    this.setState({ id: this.props.location.state._id , status:this.props.location.state.status});
  }

  backToList(){
    debugger
    this.props.history.goBack();  
  }  
  
  handleChange = prop => event => {
    let obj = {};
    obj[prop]=event.target.value;
    this.setState(obj);   
  }
  
  saveChanges() {
    debugger
    let obj = {};
    obj._id = this.state.priority;
    obj.name = this.state.name;
    obj.description = this.state.description;
    obj.priority = this.state.priority;
    obj.status=this.state.status;
    service.update(obj);
    this.props.history.goBack();
  }

  render() {
    return (
      <form className="container"  autoComplete="off" >
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
          value={this.state.priority}
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
      <Button variant="contained" color="primary" onClick={this.saveChanges.bind(this)}>
       save
       </Button>
      <Button variant="contained" color="primary" onClick={this.backToList}>
       back
      </Button>
      </form>
    );
  }
}
export default ViewTask;
