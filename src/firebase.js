import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClqU2Sq16NVzA549NYUO3CQS65-4t_NGY",
  authDomain: "imessenger-clone-647ba.firebaseapp.com",
  databaseURL: "https://imessenger-clone-647ba.firebaseio.com",
  projectId: "imessenger-clone-647ba",
  storageBucket: "imessenger-clone-647ba.appspot.com",
  messagingSenderId: "583724990020",
  appId: "1:583724990020:web:9761604a4944c3ed670611",
  measurementId: "G-FMCYQLG3E4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
