import firebase from 'firebase'

const config = {
    piKey: "yusetrzy",
    authDomain: "react-firebase-food.firebaseapp.com",
    databaseURL: "https://react-firebase-food.firebaseio.com",
    projectId: "react-firebase-food",
    storageBucket: "react-firebase-food.appspot.com",
    messagingSenderId: "uyebgrec"
};

firebase.initializeApp(config);
export default firebase;
