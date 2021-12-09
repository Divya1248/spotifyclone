import firebase from "firebase"
//Authentication
import 'firebase/auth'

// firestore database
import 'firebase/firestore'
//real time database
import 'firebase/database'
// storage
import 'firebase/storage'
// function
// import 'firebase/function'
// hosting

// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNFWLJq8dioVmCCXCsqdJogd9z8qmpZFo",
  authDomain: "spotify-clone-59d4a.firebaseapp.com",
  projectId: "spotify-clone-59d4a",
  storageBucket: "spotify-clone-59d4a.appspot.com",
  messagingSenderId: "100575451752",
  appId: "1:100575451752:web:d8823483bbb4d80ade79dd"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);

export default firebase;