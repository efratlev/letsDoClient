import React, { Component } from 'react';
import './Member.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


class Member extends Component {
  
    render (){
      return(
        <ListItem alignItems="flex-start" id={this.props.id}>
          <ListItemAvatar>
            <Avatar alt="groupLogo"  src={ require('../images/'+this.props.img+'.jpg') } />
          </ListItemAvatar>
          <ListItemText
            primary={ this.props.username }         
          />
        </ListItem>
    );
  }
}

export default Member;