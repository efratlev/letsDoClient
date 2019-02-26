import app from 'firebase/app';
import Service from '../service/Service';

const service= new Service();

const config = {
    apiKey: "AIzaSyBY8Nly_yBTxxC3bqkSge7iecwX1ODbq0w",
    authDomain: "letsdo-5d29d.firebaseapp.com",
    databaseURL: "https://letsdo-5d29d.firebaseio.com",
    projectId: "letsdo-5d29d",
    storageBucket: "letsdo-5d29d.appspot.com",
    messagingSenderId: "349980724264"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        navigator.serviceWorker.register('../../firebase-messaging-sw.js')
            .then((registration) => {
                const messaging = app.messaging();
                messaging.requestPermission().then(function () {
                    console.log('Notification permission granted.');
                    messaging.getToken().then(function (currentToken) {
                        if (currentToken) {
                            service.updateToken(currentToken);
                            console.log('GOT TOKEN -- GOT TOKEN -- GOT TOKEN -- GOT TOKEN -- GOT TOKEN');
                            console.log(currentToken);
                        } else {
                            // Show permission request.
                            console.log('No Instance ID token available. Request permission to generate one.');
                            // Show permission UI.
                        }
                    }).catch(function (err) {

                        console.log('An error occurred while retrieving token. ', err);
                    });

                    //refresh
                    messaging.onTokenRefresh(function() {
                        messaging.getToken().then(function(refreshedToken) {
                          console.log('Token refreshed.');
                          console.log(refreshedToken);
                          service.updateToken(refreshedToken);
                          // Indicate that the new Instance ID token has not yet been sent to the
                          // app server.
                          //setTokenSentToServer(false);
                          // Send Instance ID token to app server.
                          //sendTokenToServer(refreshedToken);
                          // ...
                        }).catch(function(err) {
                          console.log('Unable to retrieve refreshed token ', err);
                          //showToken('Unable to retrieve refreshed token ', err);
                        });
                      });
                }).catch(function (err) {
                    console.log('Unable to get permission to notify.', err);
                });
                //when chrome is open
                debugger
                messaging.onMessage(function(payload) {
                    debugger
                    console.log('Message received. ', payload);
                    console.log('[src/Firebase/Firebase.js] Received message ', payload);
                    const notificationTitle = payload.title||'iii';
                    const notificationOptions = {
                        body: payload.body||'fdd',
                        icon: payload.icon||'kkkk'
                    };
                    // Let's check whether notification permissions have already been granted
                    // If it's okay let's create a notification
                   // var notification = new Notification(notificationTitle, notificationOptions);
                });
            });
    }
}

export default Firebase;
