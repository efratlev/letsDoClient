import React, { Component } from 'react';
import './Member.css';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Member from '../login/Member';
import Service from '../service/Service';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const service = new Service();


const authorations = [
  {
    value: '1',
    label: 'manager',
  },
  {
    value: '2',
    label: 'regular',
  },
  {
    value: '3',
    label: 'read-only',
  },
];

class MemberList extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      email:'',
      members:[]    
    }
  }

  componentDidMount()
  {
    debugger
    service.getUserListByGroup(this); 
  }

  addNewUser()
  {
    debugger
    let mailOptions={};
    mailOptions.to=this.state.email;
    mailOptions.from='<here the name of the manager>'
    service.sendEmail(mailOptions);
    //send email to this group
   // when he will approve it he will be added
   this.setState({ open: true, email:'' });
  }  
  
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  }

  renderMember(member) {
    debugger
    return(
      <div>
    <ListItem button >
      <Member username={member.userName} id={member._id}></Member> 
      <TextField style={{ width: '200px'}}
          id="filled-select-authoration-native"
          select
          label="authoration"
          className="textField"
          value={member.authoration}
          onChange={this.handleChange('authoration')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: "menu"
            },
          }}
          margin="normal"          
        >
          {authorations.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>   
     </ListItem>
    </div>
      )
  }
  
  render (){
    return this.state.members!=null&&this.state.members.length
    ?(
        <div>
         <List
          component="nav"
          subheader={<ListSubheader component="div">The members in my group</ListSubheader>}
          className="root">
            {this.state.members.map(member => 
              this.renderMember(member))
          }
          <ListItem button>
          <ListItem alignItems="flex-start" >            
              <ListItemText>
                <TextField 
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  id="standard-with-placeholder" style={{ width: '340px'}} type="email"
                  placeholder="Invite a new member to the group by his email"
                  margin="normal"/>
              </ListItemText>
              </ListItem>              
              <Button variant="contained" color="primary" onClick={this.addNewUser.bind(this)}>
              invite
            </Button>            
        </ListItem>
        </List>
      {/*  to move to another component */}
         <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Email sent</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
     </div>
    ):null;
  }
}

export default MemberList;