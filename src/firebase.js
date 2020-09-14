import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaqiaZKplMT8h9T4-mijenRyqNdY_8Mok",
  authDomain: "clone-d81be.firebaseapp.com",
  databaseURL: "https://clone-d81be.firebaseio.com",
  projectId: "clone-d81be",
  storageBucket: "clone-d81be.appspot.com",
  messagingSenderId: "239325067876",
  appId: "1:239325067876:web:84f2ea0fc4160ffe943d71"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
 