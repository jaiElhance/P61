import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBx-fFjCPcCxKFIGl1geLJ6pze904yN_tU",
    authDomain: "project-60-3fde5.firebaseapp.com",
    projectId: "project-60-3fde5",
    storageBucket: "project-60-3fde5.appspot.com",
    messagingSenderId: "150228836110",
    appId: "1:150228836110:web:0542405b7771bdc602c15f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export default firebase.database();