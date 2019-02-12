import React, { Component } from 'react';
import './Todo.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Todo from './Todo';
import Service from '../service/Service';
import ToDoPerUser from './ToDoPerUser';
import PropTypes from 'prop-types';
import Sort from '../sort/Sort';

const service = new Service();

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class ToDoList extends Component {

  constructor(props) {
    super(props);    
    this.state = {
      value: 0,
    };
  }
  
  createNewTask() {
    let path = '../NewTask';
    this.props.history.push(path);
  }
  
  filters(key) {
    debugger
    let t = 0;
    this.state.priorityFilter.map(item => {
      if (key.priority === item.prt) {
        debugger
        t = 1;
        return t;
      }
    });
    return t;
  }

  removeFilter(filter) {
    let arr;
    arr = this.state.priorityFilter.filter(function (obj, i) {
      if (obj.prt !== filter) {
        return obj;
      }
    });
    this.setState({ priorityFilter: arr });
    this.props.history.push('Todo');
  }

  addFilter(filter) {
    let obj = { prt: filter };
    this.state.priorityFilter.push(obj);
    this.props.history.push('Todo');
  }

  checkboxPriority(event) {
    debugger
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const v = target.value;
    if (value == true) {
      this.addFilterPriority(v);
    }
    else {
      this.removeFilterPriority(v);
    }
  }

  sort(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      // v not in use !! 
      // please dont delete it!!
      const v = target.value;
      debugger
      if (value == true) {
        this.setState({
          arr: this.state.arr.sort(function (obj1, obj2) {
            return obj1.priority - obj2.priority;
          })
        })
      }
      else {
        debugger
        this.setState({
          arr: this.state.arr.sort(function (obj1, obj2) {
            return obj1._id - obj2._id ;
          })
        })
      }
      debugger
      this.props.history.push('./Todo');
  }

  renderSort(){
    return (
      <Sort sortPriority={this.sortPriority}/>
    );
  }
  
  toggleTab = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="root">
      <AppBar position="static" color="default" className="appBar">
        <Tabs value={value} className="appBar" onChange={this.toggleTab.bind(this)} >
          <Tab label="Group Tasks" />
          <Tab label="My Tasks" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><ToDoPerUser></ToDoPerUser></TabContainer>}
      {value === 1 && <TabContainer><Todo></Todo></TabContainer>}
      <Button variant="contained" color="primary" onClick={this.createNewTask.bind(this)}>
          new
      </Button>
    </div>
    );
  }  
}

export default ToDoList;