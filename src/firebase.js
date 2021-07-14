import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC1USpTcwtnLJFo0P6XW91b6TXtxkYpBgA",
    authDomain: "linkedin-clone-aa610.firebaseapp.com",
    projectId: "linkedin-clone-aa610",
    storageBucket: "linkedin-clone-aa610.appspot.com",
    messagingSenderId: "306830333277",
    appId: "1:306830333277:web:6e523ee6757d99081904b4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth}