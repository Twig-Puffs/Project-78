import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCwk8HbNhlSkfqAUH4EMHtfaxGMT275PfU",
    authDomain: "e-ride-c28c8.firebaseapp.com",
    projectId: "e-ride-c28c8",
    storageBucket: "e-ride-c28c8.appspot.com",
    messagingSenderId: "929221715605",
    appId: "1:929221715605:web:b31c82bde3c44f8af89d9c"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
