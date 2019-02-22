import React, { Component } from 'react';
const axios = require('axios');

class ServiceLocator extends Component {
    constructor(props) {
        super(props);
    }
    //service component service(url,method,data,callback,callbackerr){
    //baseUrl = 'http://4000/';
    //baseUrl = 'https://family.heroku.com/';

   executeGet(url, method, body, callback, callbackerr) {
        debugger
        axios({ url: 'https://lets-do-server.herokuapp.com/' + url, method: method, params: body }).then(function (response) {
            callback(response.data); 
        }).catch(function (error) {
            callbackerr(error);
            console.log(error);
        });
    } 

    executePost(url, method, body, callback, callbackerr) {
        debugger
        axios({ url: 'https://lets-do-server.herokuapp.com/' + url, method: method, data: body }).then(function (response) {
            callback(response.data); 
        }).catch(function (error) {
            callbackerr(error);
            console.log(error);
        });
    }

    sendMail(url, method, body, callback, callbackerr) {
        debugger
        axios({ url: 'https://lets-do-server.herokuapp.com/' + url, method: method, data: body }).then(function (response) {
            callback(response.data); 
        }).catch(function (error) {
            callbackerr(error);
            console.log(error);
        });
    }
}
export default ServiceLocator;