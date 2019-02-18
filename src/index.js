import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



function workerOfRegistration(registration){
  var worker = null;
  if (worker = registration.installing){
    console.log('Installing service worker: ', worker);
  } else if (worker = registration.waiting){
    console.log('Waiting for service worker to be activated: ', worker);
  } else if (worker = registration.active){
    console.log('Worker is now active: ', worker);
  } else {
    console.error("This should not be exected: can't get any worker from registration.");
  }
  return worker;
}

// Notification.requestPermission(function(status){
// debugger
//     console.log('Permission: ', status);
// });

navigator.serviceWorker.register('../sw/service-worker.js').then(function(registration) {
    debugger
  console.log('ServiceWorker registration successful with scope: ', registration.scope);

  var worker = workerOfRegistration(registration);

  var everyNsecondsField = 3;
  this.addEventListener('click', function(){
    var input = everyNsecondsField.value
    var everyNseconds = parseInt(input, 10) * 1000;
    if (everyNseconds <= 0){
      console.error('Invalid input: ', input);
      return;
    }

    console.log('Parsed interval: ', everyNseconds);
    worker.postMessage({ newIntervalSec: everyNseconds });
  });

  this.addEventListener('click', function(){
    worker.postMessage({ stop: true });
  });
}).catch(function(err) {
  console.log('ServiceWorker registration failed: ', err);
});


    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('Vibration Sample', {
            body: 'Buzz! Buzz!',
            icon: '../images/touch/chrome-touch-icon-192x192.png',
            vibrate: [200, 100, 200, 100, 200, 100, 200],
            tag: 'vibration-sample'
          });
        });
      }
    });
