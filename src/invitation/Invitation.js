import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Service from '../service/Service'
import { Route , withRouter} from 'react-router-dom';

const service = new Service();

class Invitation extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
         test:'You have invited to collaborate on the group: '}    
        }

    approvedInvitation(groupId)
    {
        let obj={};
        obj.userId= localStorage.getItem('userId');
        obj.groupId=groupId;
        obj.invitationId=this.props.invitationId;
        service.approvedInvitation(obj, this);
    }
      

    render (){
      return(
        <ListItem alignItems="flex-start" groupId={this.props.groupId}>
          <ListItemAvatar>
            <Avatar alt="groupLogo" /* src={ require('../images/'+this.props.id+'.jpg') } */ />
          </ListItemAvatar>
          <ListItemText
            primary= {this.state.test+this.props.groupName }
          />
           <Button variant="contained" color="primary" onClick={()=>this.approvedInvitation(this.props.groupId)}>
              Approve Invitation
           </Button>  
        </ListItem>
    );
  }
}

export default withRouter(Invitation);