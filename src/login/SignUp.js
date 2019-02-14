/* import React, { Component } from 'react';
import Input from '../components/Input';
import Service from '../service/Service';

const service = new Service();

class SignUp extends Component {
  
  constructor(props) {
    super(props); 
    this.state = {     
      users:{}
    };
  }
  
  
  
  render() {
    return (              
      <div className="App-header">   
        <div className=''>  
          <a href="./SignIn">Sign In</a>      
          <h3>Sign Up</h3>             
          <form onSubmit={(e)=>service.signUp(e)} >
            <Input type='email' name='username' placeholder='username' />
            <Input type='password' name='password' placeholder='password' />  
            <button>Sign Up</button>            
          </form>         
        </div>
      </div>     
    ); 
  }
}

export default SignUp; */

import React, { Component } from 'react';
import './Login.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Service from '../service/Service'

const service = new Service();

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email:'',
      password:''
    }
  }

  handleSubmit(event){
    let loginDetails = {};
    loginDetails.userName = this.state.username;
    loginDetails.email = this.state.email;
    loginDetails.password = this.state.password;
    if(service.signUp(loginDetails))
    {
      this.props.history.push('../NewGroup');
    }      
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render (){
    return(
    <main className='main'>
      <CssBaseline />
      <Paper className='paper'>
        <Avatar className='avatar'>
          <LockIcon />
        </Avatar>
        <Typography  component="h1" variant="h5">
          Sign up
        </Typography>
        <form  onSubmit={this.handleSubmit.bind(this)} className='form'>
         <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Name</InputLabel>
            <Input id="username" name="username" autoComplete="username" autoFocus onChange={this.handleChange('username')}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" onChange={this.handleChange('email')}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password"  onChange={this.handleChange('password')}/>
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
           
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </main>
  );
  }
}

export default SignUp;