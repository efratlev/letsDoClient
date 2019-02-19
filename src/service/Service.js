import React, { Component } from 'react';
import './Service.css';
import ServiceLocator from './ServiceLocator';
/* 
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); */
const serviceLocator = new ServiceLocator();

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: 'task133 ', _id: "11", desc: "desc of task1", priority: '1', "status": 0 },
        { name: 'task2', _id: "22", desc: "desc of task2", priority: '2', "status": 0 },
        { name: 'task3', _id: "33", desc: "desc of task3", priority: '1', "status": 0 }

      ]
    };
  }


  //oninit react
  setList(l1) {
    this.setState = ({
      list: l1,
    });
  }
  getList() {
    if (localStorage.getItem('tasksList') === null) {
      localStorage.setItem('tasksList', JSON.stringify(this.state.list));
    }
    return JSON.parse(localStorage.getItem('tasksList'));
  }

  getUserListByGroup(self) {
    debugger
    serviceLocator.executeGet('groups/getUsersInGroup', 'get', { _id: localStorage.getItem('currentGroup') },
      function (data) {
        self.setState({ members: data });
        console.log('users for group !!!!!!!!!!!');
      },
      function () { console.log('users for group failed :( ???????????????????'); });
  }
  getUserById(id) {
    let users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        return users[i];
      }
    }
    alert("user not found- error");
  }

  signIn(obj, self) {
    debugger
    serviceLocator.executePost('login', 'post', obj, function () { console.log('new user !!!!!!!!!!!'); self.props.history.push('../MyGroups'); },
      function () { console.log('failed to create new user :( ???????????????????'); })

    /* if(localStorage.getItem('users')==null)
    {
      alert("any user exist");
      return;
    }  
    let users=JSON.parse(localStorage.getItem('users')); 
   // let user={username:localStorage.getItem('username'), pass:localStorage.getItem('password')};
    for(let i=0;i<users.length;i++)
    {
      if(users[i].password==obj.password)
      {
        if(users[i].username==obj.username||users[i].email==obj.username)
        alert("this is the user!!!");
        return true;
      }
    }
    alert("not exist:(");  
    return false; */

  }


  createGroup(obj, self) {
    debugger
    serviceLocator.executePost('groups/newGroup', 'post', obj,
      function () {
        console.log('new group !!!!!!!!!!!');
        self.props.history.push('../MyGroups');
      },
      function () { console.log('failed to create new group :( ???????????????????'); });
  }

  retrieveTasksGroup(groupId) {
    //rerturn all tasks for specific group
    debugger
  }

  isPasswordValid(password) {
    if (password.length < 5) {
      return false;
    }
    return true;

  }
  signUp(obj, self) {
    /* if (!this.isPasswordValid(obj.password)) {
      alert("invalid password");
      return false;
    }
    let users = [];
    if (localStorage.getItem('users') != null) {
      users = JSON.parse(localStorage.getItem('users'));
    }
    let newUser = { username: obj.username, email: obj.email, password: obj.password, id: obj.password };
    users.push(newUser);

  
    alert("check details&/n enter to all groups");
     */
    debugger
    serviceLocator.executePost('users/createNewUser', 'post', obj,
      function (data) {
        console.log('new user !!!!!!!!!!!');
        self.props.history.push('../NewGroup');
        localStorage.setItem('userId', data._id);
      },
      function () { console.log('failed to create new user :( ???????????????????'); });
   
  }

  returnGroups(self) {
    serviceLocator.executeGet('users/userGroups', 'get', { id: localStorage.getItem('userId') },
      function (data) {
        self.setState({ groups: data.groups });
        console.log('users for group !!!!!!!!!!!');
      },
      function () { console.log('users for group failed :( ???????????????????'); });
  }

  createNewTask(task, self) {

    serviceLocator.executePost('tasks/newTask','post',task,
    function (data) {
      self.props.history.goBack();
      console.log('users for group !!!!!!!!!!!');
    },
    function () { console.log('users for group failed :( ???????????????????'); });/* 
    
    this.setState({
      list: this.state.list.push(obj),
    });
    localStorage.setItem('tasksList', JSON.stringify(this.state.list));
    return this.state.list; */
  }

  markTaskAsDone(id) {
    let arr;
    arr = this.getList().filter(function (obj, i) {
      if (obj._id !== id) {
        return obj;
      }
    });
    this.setList(arr);
    return (arr);
  }

  deleteTask(task) {
    //delete it if u have autho--
  }

  getIdFromLocalStorage(id) {
    this.state.list.map(item => {
      if (item._id === id) {
        localStorage.setItem('objFromLocalStorage', JSON.stringify(item));
      }
    })
  }

  update(obj) {
    let v1 = {};
    v1 = this.markTaskAsDone(obj._id);
    this.setList(v1);
    v1.push(obj);
    localStorage.setItem('tasksList', JSON.stringify(v1));
  }

  sendEmail(mailOptions) {
    serviceLocator.sendMail('sendEmail', 'post', mailOptions, function () { console.log('send mail !!!!!!!!!!!'); },
      function () { console.log('failed to send email :( ???????????????????'); });
  }

  render() {
    return this.props.children;
  }

}
export default Service;
