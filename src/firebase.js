import firebase from 'firebase'

const config = {
    piKey: "AIzaSyD410mfMtdheCXBkk3X8sjB5ne2C119OmI",
    authDomain: "react-firebase-food.firebaseapp.com",
    databaseURL: "https://react-firebase-food.firebaseio.com",
    projectId: "react-firebase-food",
    storageBucket: "react-firebase-food.appspot.com",
    messagingSenderId: "708557153885"
};
firebase.initializeApp(config);
export default firebase;
