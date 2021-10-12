import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth"
var firebaseConfig = {
    apiKey: "AIzaSyDr-JK3jyvOuaEgKSKFWn02DjU-xP2iG1M",
    authDomain: "vendor-pwa.firebaseapp.com",
    databaseURL: "https://vendor-pwa.firebaseio.com",
    projectId: "vendor-pwa",
    storageBucket: "vendor-pwa.appspot.com",
    messagingSenderId: "40057560759",
    appId: "1:40057560759:web:b83ed20fb482eeb9d73732"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp