import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBnEFTLgyUtQCc8q5_eL2_u7rmCh4UW4J8",
    authDomain: "wireless-library-6b7d1.firebaseapp.com",
    databaseURL: "https://wireless-library-6b7d1.firebaseio.com",
    projectId: "wireless-library-6b7d1",
    storageBucket: "wireless-library-6b7d1.appspot.com",
    messagingSenderId: "475889295440",
    appId: "1:475889295440:web:eb6d041d33b8c291f3b155"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();