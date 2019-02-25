import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Member.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Chart from 'chart.js';


class Profile extends Component {
  
  handleChange(){
   //when change 
  }

  save(){
    //save---
  }

  browseProfileImage(){
    //----
  }
  
  render (){
      return(

       <div>
          <canvas id="myChart" width="400" height="400"></canvas>
       </div>
    );
  }
}

export default Profile;
