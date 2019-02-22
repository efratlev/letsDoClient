import React, { Component } from 'react';
import ServiceLocator from './ServiceLocator';
import Task from '../task/Task';

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

  getTaskListByUser(userId) {
    debugger
    if (userId == null)
      userId = localStorage.getItem('userId');
    let tasks = JSON.parse(localStorage.getItem('groupTasks'));
    let userTasks = [];
    tasks.map(task => {
      if (task.assignedTo == userId) {
        userTasks.push(task);
      }
    }
    )
    debugger
    return userTasks;
  }

  getUserListByGroup(self) {
    debugger
    serviceLocator.executePost('groups/getUsersInGroup', 'post', { _id: localStorage.getItem('currentGroup') },
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
    serviceLocator.executePost('login', 'post', obj,
      function (data) {
        localStorage.setItem('userId', data._id);
        localStorage.setItem('userName', data.userName);
        console.log('login !!!!!!!!!!!');
        self.props.history.push('../MyGroups');
      },
      function () { console.log('login failed :('); })
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

  retrieveTasksByGroupBasic(callback) {
    debugger
    serviceLocator.executePost('tasks/getAllGroupsTasks', 'post', { groupId: localStorage.getItem('currentGroup') },
      function (data) {
        localStorage.setItem('groupTasks', JSON.stringify(data.tasks));
        callback(data);
        console.log('tasks for group !!!!!!!!!!!');
      },
      function () { console.log('taskss for group failed :( ???????????????????'); });
  }

  retrieveTasksByGroup(self) {
    this.retrieveTasksByGroupBasic(
      function (data) {
        self.setState({ loadingDataInd: true });
      });

  }

  isPasswordValid(password) {
    if (password.length < 5) {
      return false;
    }
    return true;

  }
  signUp(obj, self) {
    debugger
    serviceLocator.executePost('users/createNewUser', 'post', obj,
      function (data) {
        console.log('new user !!!!!!!!!!!');
        self.props.history.push('../NewGroup');
        localStorage.setItem('userId', data._id);
        localStorage.setItem('userName', data.userName);
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
    task.groupId = localStorage.getItem('currentGroup');
    serviceLocator.executePost('tasks/newTask', 'post', task,
      function (data) {
        self.props.history.goBack();
        console.log('users for group !!!!!!!!!!!');
      },
      function () { console.log('users for group failed :( ???????????????????'); });
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

  deleteTask(taskId, self) {
    let self2 = this;
    serviceLocator.executePost('tasks/deleteTask', 'delete', { _id: taskId },
      function (data) {
        debugger
        self2.retrieveTasksByGroupBasic(
          function (data) {
            self.componentDidMount();
          });
        console.log('deleteTask !!!!!!!!!!!');
      },
      function () { console.log('delete Task failed :('); });
  }

  /*   getIdFromLocalStorage(id) {
      this.state.list.map(item => {
        if (item._id === id) {
          localStorage.setItem('objFromLocalStorage', JSON.stringify(item));
        }
      })
    } */

  updateTask(task, self) {
    serviceLocator.executePost('tasks/updateTask', 'put', task,
      function (data) {
        self.props.history.goBack();
        console.log('update task !!!!!!');
      },
      function () { console.log('update task failed :('); });
  }

  updateStatus(task, self) {
    debugger
    let self2=this;
    serviceLocator.executePost('tasks/updateTask', 'put', task,
      function (data) {
        self2.retrieveTasksByGroupBasic(
          function (data) {
            self.componentDidMount();
          });
       // self.setState({ status:  self.statusNum, statusColor: self.statusDetailes[ self.statusNum].color, tooltip:  self.statusDetailes[ self.statusNum].tooltip });
        console.log('update task !!!!!!');
      },
      function () { console.log('update task failed :('); });
  }

  sendEmail(mailOptions, self) {
    serviceLocator.sendMail('sendEmail', 'post', mailOptions,
      function () {
        self.setState({ open: true, txtSnackBar: 'Email sent' });
        console.log('send mail !!!!!!!!!!!');
      },
      function () {
        self.setState({ open: true, txtSnackBar: "Email can't send" });
        console.log('failed to send email :( ???????????????????');
      });
  }

  render() {
    return this.props.children;
  }

}
export default Service;
