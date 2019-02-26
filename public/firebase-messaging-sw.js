importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js');
var config = {
    apiKey: "AIzaSyBY8Nly_yBTxxC3bqkSge7iecwX1ODbq0w",
    authDomain: "letsdo-5d29d.firebaseapp.com",
    databaseURL: "https://letsdo-5d29d.firebaseio.com",
    projectId: "letsdo-5d29d",
    storageBucket: "letsdo-5d29d.appspot.com",
    messagingSenderId: "349980724264"
};
firebase.initializeApp(config);
firebase.messaging().setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
});


