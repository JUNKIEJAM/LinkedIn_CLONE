import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBRmcCHvLDg-Uu3RX7ACkAnSuYWwAdln8E",
    authDomain: "linkedin-clone-yt-58576.firebaseapp.com",
    projectId: "linkedin-clone-yt-58576",
    storageBucket: "linkedin-clone-yt-58576.appspot.com",
    messagingSenderId: "113159401879",
    appId: "1:113159401879:web:3542cd8c5010ce09cdd4d2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };