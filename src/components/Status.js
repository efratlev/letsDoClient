import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import Service from '../service/Service';
import { Route , withRouter} from 'react-router-dom';


const statusDetailes = [
  {
    value: '1',
    color: 'Blue',
    tooltip: 'Defined',
  },
  {
    value: '2',
    color: 'Green',
    tooltip: 'Started',
  },
  {
    value: '3',
    color: 'Orange',
    tooltip: 'In Progress',
  },
  {
    value: '4',
    color: 'Red',
    tooltip: 'Completed',
  },
];

class Status extends React.Component {

  constructor(props) {
    super(props);
    debugger
    this.state = {
      status: this.props.status,
      statusColor: statusDetailes[this.props.status-1].color,
      tooltip: statusDetailes[this.props.status-1].tooltip,
      checked: true,
    }
  }

  componentUpdateMount()
  {
    this.setState(
    {
      status: this.props.status,
      statusColor: statusDetailes[this.props.status-1].color,
      tooltip: statusDetailes[this.props.status-1].tooltip,
      checked: true,
    })
  }

  handleStatus(service) {
    let statusNum = this.state.status + 1;
    if (statusNum > statusDetailes.length)
      statusNum = 1;
    this.setState({ status: statusNum, statusColor: statusDetailes[statusNum-1].color, tooltip: statusDetailes[statusNum-1].tooltip });  
    this.props.saveStatus();      
  }

  render() {
    const service = new Service();
    return <Tooltip title={this.state.tooltip} >
      <Checkbox  onClick={() => this.handleStatus(service)}  /*onClick={this.props.saveStatus}*/
        disableRipple style={{ color: this.state.statusColor }}
        checked={this.state.checked}
      />
    </Tooltip>
  }
}
export default withRouter(Status);