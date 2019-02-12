 import React, { Component } from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'react-router';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuBar extends Component {
  state = {
    auth: true,
    auth2: true,
    anchorEl: null,
    anchorE2: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleMenuBar = event => {
    this.setState({ anchorE2: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  handleCloseBar = () => {
    this.setState({ anchorE2: null });
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const { auth2, anchorE2 } = this.state;
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorE2);

    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleMenuBar} />
              <Menu
                  id="menu-appbar"
                  anchorEl={anchorE2}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open2}
                  onClose={this.handleCloseBar}
                >
                  <MenuItem onClick={this.handleCloseBar}><Link to="/SignIn">log in</Link></MenuItem>
                  <MenuItem onClick={this.handleCloseBar}><Link to="/ToDo">to do</Link></MenuItem>
                </Menu>
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Let's Do
            </Typography> 
          {/*   <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
           <IconButton color="inherit">
            <AddIcon />
          </IconButton>
          <IconButton color="inherit">
             <SearchIcon />
           </IconButton>
           <IconButton color="inherit">
              <MoreIcon />
           </IconButton> */}
          
           <Button onClick={() => { this.props.history.push('/Todo') }}
           color="inherit">Home</Button>
           <Button onClick={() => { this.props.history.push('/About') }}
            color="inherit">About</Button>
           <Button onClick={() => { this.props.history.push('/Login') }}
           color="inherit">Log in</Button>
           <Button color="inherit" onClick={() => { this.props.history.push('/SignUp') }}
           >Sign up</Button>
                   
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}><Link to="/Profile">Profile</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(MenuBar));
