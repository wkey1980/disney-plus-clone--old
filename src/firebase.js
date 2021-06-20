import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6ZqwTazYszG_vFJazdDtPcYgMPOkdKgo",
  authDomain: "disney-plus-clone-d5701.firebaseapp.com",
  projectId: "disney-plus-clone-d5701",
  storageBucket: "disney-plus-clone-d5701.appspot.com",
  messagingSenderId: "575164843765",
  appId: "1:575164843765:web:108f4fc5caa9e0129ee7bc",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
