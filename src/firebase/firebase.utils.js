import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
    apiKey: "AIzaSyC2v62XnxGQfx1p7_RCCXRoduYkwe5inXY",
  authDomain: "ecommerce-website-fe037.firebaseapp.com",
  projectId: "ecommerce-website-fe037",
  storageBucket: "ecommerce-website-fe037.appspot.com",
  messagingSenderId: "461794679603",
  appId: "1:461794679603:web:1c01b6f86f4db3b21efc46",
  measurementId: "G-DWZ3YL2S6Z"
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () =>auth.signInWithPopup(provider)

export default firebase;