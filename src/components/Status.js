import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

const statusDetailes = [
  {
    value: '0',
    color: 'Blue',
    tooltip:'Defined',
  },
  {
    value: '1',
    color: 'Green',
    tooltip:'Started',
  },
  {
    value: '2',
    color: 'Orange',
    tooltip:'In Progress',
  },
  {
    value: '3',
    color: 'Red',
    tooltip:'Completed',
  },
];

class Status extends React.Component 
{   
    constructor(props)
    {
      super(props);
      debugger
      this.state = {
          status:this.props.status,
          statusColor:statusDetailes[this.props.status].color,          
          tooltip:statusDetailes[this.props.status].tooltip,
          checked:true,
      }
    }
    
    handleStatus()
    {
      let statusNum=this.state.status+1;
      if(statusNum>=statusDetailes.length)
        statusNum=0;     
      this.setState({status:statusNum, statusColor:statusDetailes[statusNum].color,tooltip:statusDetailes[statusNum].tooltip});      
    }  
    
    render() {      
      return <Tooltip title={this.state.tooltip}>
      <Checkbox onClick={()=>this.handleStatus()}
        disableRipple style={{ color: this.state.statusColor}}   
        checked= {this.state.checked}      
      />
    </Tooltip>
    }
  }
  export default Status;