import app from 'firebase/app';

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
                            console.log('jgdshuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu');
                            console.log(currentToken);
                        } else {
                            // Show permission request.
                            console.log('No Instance ID token available. Request permission to generate one.');
                            // Show permission UI.
                        }
                    }).catch(function (err) {

                        console.log('An error occurred while retrieving token. ', err);
                    });
                }).catch(function (err) {
                    console.log('Unable to get permission to notify.', err);
                });
            });
    }
}

export default Firebase;