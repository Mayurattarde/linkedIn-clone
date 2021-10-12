import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1XWHTFbzHb0Xlprbr7nRBGDVSgssjPEA",
    authDomain: "llinkedin-clone-343e9.firebaseapp.com",
    projectId: "llinkedin-clone-343e9",
    storageBucket: "llinkedin-clone-343e9.appspot.com",
    messagingSenderId: "902562956161",
    appId: "1:902562956161:web:265da74c594b2f6b881e80"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
