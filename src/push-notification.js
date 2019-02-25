import firebase from 'firebase';

export const initializeFirebase = () => {
    const config = {
        apiKey: "AIzaSyBY8Nly_yBTxxC3bqkSge7iecwX1ODbq0w",
        authDomain: "letsdo-5d29d.firebaseapp.com",
        databaseURL: "https://letsdo-5d29d.firebaseio.com",
        projectId: "letsdo-5d29d",
        storageBucket: "letsdo-5d29d.appspot.com",
        messagingSenderId: "349980724264"
    };
    firebase.initializeApp(config);
};