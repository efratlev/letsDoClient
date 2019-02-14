import React, { Component } from 'react';
const axios = require('axios');

class ServiceLocator extends Component {
    constructor(props) {
        super(props);
    }
    //service component service(url,method,data,callback,callbackerr){
    //baseUrl = 'http://4000/';
    //baseUrl = 'https://family.heroku.com/';

    executePost(url, method, body, callback, callbackerr) {
        debugger
        axios({ url: 'http://localhost:4000/' + url, method: method, data: body }).then(function (response) {
            //callback(response);
            callback(response.data); 
            console.log(response);
        }).catch(function (error) {
            callbackerr(error);
            console.log(error);
        });
    }

    executeCommand(url, method, body, callback, callbackerr) {
        debugger
        axios({ url: 'http://localhost:4000/' + url, method: method, params: body }).then(function (response) {
            //callback(response);
            callback(response.data); 
            console.log(response);
        }).catch(function (error) {
            callbackerr(error);
            console.log(error);
        });
    }

    

}
export default ServiceLocator;