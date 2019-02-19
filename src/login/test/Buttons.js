import React from 'react'
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

export default props => 
  <div className='buttons fadein'>
    
    <div className='button'>
      <label htmlFor='single'>
        <LockIcon />
      </label>
      <input type='file' id='single' onChange={props.onChange} /> 
    </div>

    <div className='button'>
      <label htmlFor='multi'>
        <LockIcon />
      </label>
      <input type='file' id='multi' onChange={props.onChange} multiple />
    </div>

  </div>