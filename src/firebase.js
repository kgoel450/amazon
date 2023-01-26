
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCqU13uSJdh8FIoBvadYUlwQ3UCJ4keO1A",
  authDomain: "clone-12b78.firebaseapp.com",
  projectId: "clone-12b78",
  storageBucket: "clone-12b78.appspot.com",
  messagingSenderId: "695865731218",
  appId: "1:695865731218:web:5187b2bd695e6826399e4b",
  measurementId: "G-5TK7EM85QQ"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};

