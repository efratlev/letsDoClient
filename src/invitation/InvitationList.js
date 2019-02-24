import React, { Component } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Invitation from '../invitation/Invitation';
import Service from '../service/Service';

import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';

const service = new Service();

class InvitationList extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      email:'',
      invitations:[],
      txtSnackBar:''    
    }
  }

  componentDidMount()
  {
    debugger
    service.retrieveMyInvitations(this); 
  }

  renderInvitation(invitation) {
    debugger
    return(
      <div>
    <ListItem button >
      <Invitation invitationId={invitation._id} groupName={invitation.groupId.groupName} groupId={invitation.groupId._id}></Invitation> 
     </ListItem>
    </div>
      )
  }
  
  render (){
    return this.state.invitations!=null&&this.state.invitations.length
    ?(
        <div>
         <List
          component="nav"
          subheader={<ListSubheader component="div">My Invitations</ListSubheader>}
          className="root">
            {this.state.invitations.map(invitation => 
              this.renderInvitation(invitation))
          }        
        </List>
     </div>
    ):null;
  }
}

export default InvitationList;