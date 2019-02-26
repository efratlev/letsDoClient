import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Menu from './menu/MenuBar';
import Todo from './todo/Todo';
import MyTasks from './todo/MyTasks';
import NewTask from './task/NewTask';
import EditTask from './editTask/EditTask';
import ViewTask from './task/ViewTask';
import NewGroup from './login/NewGroup';
import ManageGroup from './login/ViewGroup';
import MemberList from './login/MemberList';
import MyGroups from './login/MyGroups';
import SignUp from './login/SignUp';
import Album from './todo/Album';
import ToDoPerUser from './todo/ToDoPerUser';
import Login from './login/Login';
import ResetPassword from './login/ResetPassword';
import Profile from './login/Profile';
import Sort from './sort/Sort';
import Member from './login/Member';
import ToDoList from './todo/ToDoList';
import Invitation from './invitation/Invitation';
import InvitationList from './invitation/InvitationList';
import Chart from './chart/Chart';

class App extends Component {
  constructor(props){
    super(props)
    this.setState={
      arrTry: [
        { name: 'aaa ', _id: "22" },
        { name: 'bbb', _id: "33" },
        { name: 'ccc', _id: "44" }],
    }
  }

  sendData() {
    console.log('bar');
  }

  render() {
   
    return (
      <div>
      <Router>
        <main>
          <Menu />
          <Route path="/Sort" component={Sort} />
          <Route path="/ViewTask" component={ViewTask} />
          <Route path="/EditTask" component={EditTask} />
          <Route path="/NewTask" component={NewTask} />
          <Route path="/Home" component={Home} />
          <Route path="/Todo" component={Todo}  />
          <Route path="/MyTasks" component={MyTasks}  />
          <Route path="/Album" component={Album}  />
          <Route path="/About" component={About} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/ResetPassword" component={ResetPassword} /> 
          <Route path="/NewGroup" component={NewGroup} /> 
          <Route path="/Login" component={Login} /> 
          <Route path="/MemberList" component={MemberList} /> 
          <Route path="/ManageGroup" component={ManageGroup} />
          <Route path="/MyGroups" component={MyGroups} />    
          <Route path="/Member" component={Member} />
          <Route path="/ToDoPerUser" component={ToDoPerUser} />
          <Route path="/ToDoList" component={ToDoList} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Invitation" component={Invitation} />
          <Route path="/InvitationList" component={InvitationList} />
          <Route path="/Chart" component={Chart} />

        </main>
      </Router>
        {/* Footer */}
        {/* <footer className="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer> */}
      {/* End footer */}
     </div> 
    );
  }
}


export default App;


