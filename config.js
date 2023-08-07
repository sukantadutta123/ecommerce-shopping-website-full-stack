import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

firebaseConfig = {
    apiKey: "AIzaSyCNnX3kt46oWNyjxNgrqX_87IRY0tl2wZM",
    authDomain: "tutorial-aca7b.firebaseapp.com",
    projectId: "tutorial-aca7b",
    storageBucket: "tutorial-aca7b.appspot.com",
    messagingSenderId: "635535627898",
    appId: "1:635535627898:web:2541bc9a80790a1a474dc3",
    measurementId: "G-1B9DP3VKDZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider}
export default db;

