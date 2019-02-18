import React, { Component } from 'react';
import './Sort.css';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import NewTask from '../task/NewTask'
import About from '../About';
import Service from '../service/Service';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Sort extends Component {
  
  render() {
    return (
      <div className="App-header">
      <label>
          sort by priority :
          <input name="sortprt" value="for_feture_use" type="checkbox" onChange={e=> this.props.sortPriority(e)} />
        </label>
  </div>
    );
  }
}

export default Sort;
