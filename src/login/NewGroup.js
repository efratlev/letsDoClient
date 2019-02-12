import React, { Component } from 'react';
//import './NewGroup.css';
import './Login.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TagFaces from '@material-ui/icons/TagFaces';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Service from '../service/Service'

const service = new Service();

class NewGroup extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
      groupname: '',
      password:'',
      description:''      
    }
  }

  handleSubmit(event){
    let groupDetails = {};
    groupDetails.groupname = this.state.groupname;
    groupDetails.password = this.state.password;
    groupDetails.description = this.state.description;
    service.createGroup(groupDetails); 
    this.props.history.push('/MyGroups');
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    return (      
      <main className='main'>
      <CssBaseline />
      <Paper className='paper'>
        <Avatar className='avatar'>
          <TagFaces />
        </Avatar>
        <Typography  component="h1" variant="h5">
         New Group
        </Typography>
          <form onSubmit={this.handleSubmit.bind(this)} className='form'>
            <FormControl margin="normal" required fullWidth >
              <Input type='text' name='groupname' placeholder='group name' onChange={this.handleChange('groupname')}/>
            </FormControl> 
            <FormControl margin="normal" required fullWidth>
              <Input type='password' name='password' placeholder='password' onChange={this.handleChange('password')}/>
            </FormControl>
             <FormControl margin="normal" fullWidth>
              <Input type='text' name='description' placeholder='description' onChange={this.handleChange('description')}/>  
            </FormControl>  
            <CssBaseline />
            <br/>   
            <Button  style={{marginTop: '10px'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'>
           Create
          </Button>      
          </form>
          <br/>
      </Paper>       
    </main>   
    );
  }
}

export default NewGroup;
