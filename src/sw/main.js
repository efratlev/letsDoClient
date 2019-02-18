'use strict';

//navigator.serviceWorker.register('sw.js');

function showNotification() {
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
}

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

navigator.serviceWorker.register('service-worker.js')

Notification.requestPermission(function(status){
  debugger
  console.log('Permission: ', status);
  if(status==='granted')
  {
   (function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    debugger
      var worker = workerOfRegistration(registration);
    
      var everyNsecondsField = document.getElementsByClassName('everyNseconds')[0];
      document.getElementsByClassName('startButton')[0].addEventListener('click', function(){
        debugger
        var input = everyNsecondsField.value
        var everyNseconds = parseInt(input, 10) * 1000;
        if (everyNseconds <= 0){
          console.error('Invalid input: ', input);
          return;
        }
    
        console.log('Parsed interval: ', everyNseconds);
        worker.postMessage({ newIntervalSec: everyNseconds });
      });
    
      document.getElementsByClassName('stopButton')[0].addEventListener('click', function(){
        worker.postMessage({ stop: true });
      });
    }).catch(function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  }
});

/* navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
  console.log('ServiceWorker registration successful with scope: ', registration.scope);
debugger
  var worker = workerOfRegistration(registration);

  var everyNsecondsField = document.getElementsByClassName('everyNseconds')[0];
  document.getElementsByClassName('startButton')[0].addEventListener('click', function(){
    debugger
    var input = everyNsecondsField.value
    var everyNseconds = parseInt(input, 10) * 1000;
    if (everyNseconds <= 0){
      console.error('Invalid input: ', input);
      return;
    }

    console.log('Parsed interval: ', everyNseconds);
    worker.postMessage({ newIntervalSec: everyNseconds });
  });

  document.getElementsByClassName('stopButton')[0].addEventListener('click', function(){
    worker.postMessage({ stop: true });
  });
}).catch(function(err) {
  console.log('ServiceWorker registration failed: ', err);
}); */
