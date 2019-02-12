import React, { Component } from 'react';
import './EditTask.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Service from '../service/Service'

const service = new Service();
class EditTask extends Component {
  constructor(props) {
    super(props);
    this.saveChanges = this.saveChanges.bind(this);
    this.state = {
      editId: '',
      editName: '',
      editDesc: '',
      editPriority: '',
      id: ''
    }
  }

  componentWillMount() {
    this.setState({ editName: this.props.location.state.name });
    this.setState({ editDesc: this.props.location.state.desc });
    this.setState({ editPriority: this.props.location.state.priority });
    this.setState({ id: this.props.location.state._id });
  }
  
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  
  saveChanges() {
    debugger
    let obj = {};
    obj._id = this.state.id;
    obj.name = this.state.editName;
    obj.desc = this.state.editDesc;
    obj.priority = this.state.editPriority;
    service.update(obj);
    this.props.history.goBack();
  }
  render() {
    const data = this.props.location.state;
    return (
      <div className="editTask1"  >
        <div className="editTask2" >
          name :
        {data.name}
          <input value={this.state.editName}
           onChange={this.handleChange('editName')}></input>
        </div>

        <div className="editTask2">
          desc :
          <input id="desc" value={this.state.editDesc}
            onChange={this.handleChange('editDesc')}></input>
        </div>

        <div className="editTask2">
          priority :
          <input id="priority" value={this.state.editPriority}
           onChange={this.handleChange('editPriority')}></input>
        </div>
        <button onClick={this.saveChanges}>save</button>
      </div>
    );
  }
}
export default EditTask;
