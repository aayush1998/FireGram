 import firebase from 'firebase/app';
 import 'firebase/storage'
 import 'firebase/firestore'

 // Your web app's Firebase configuration

 var firebaseConfig = {
    apiKey: "AIzaSyCYMJoldwjqRlsoW8QgvVveRLfKakesJDE",
    authDomain: "firegram-66af6.firebaseapp.com",
    projectId: "firegram-66af6",
    storageBucket: "firegram-66af6.appspot.com",
    messagingSenderId: "909687783130",
    appId: "1:909687783130:web:6c48128869c6d329656fe3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage=firebase.storage();
  const projectFireStore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage,projectFireStore, timestamp};