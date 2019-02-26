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
//when chrome is close
firebase.messaging().setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };
    // Let's check whether notification permissions have already been granted
    // If it's okay let's create a notification
    var notification = new Notification(notificationTitle, notificationOptions);
});


