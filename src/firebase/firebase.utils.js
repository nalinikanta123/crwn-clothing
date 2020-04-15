import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAvD6BWddqZU4QsiB66b_8PlmfvKZ8ILkk",
    authDomain: "crwn-db-74306.firebaseapp.com",
    databaseURL: "https://crwn-db-74306.firebaseio.com",
    projectId: "crwn-db-74306",
    storageBucket: "crwn-db-74306.appspot.com",
    messagingSenderId: "21100630330",
    appId: "1:21100630330:web:dc2e94940f67bcd3000003",
    measurementId: "G-MTNJEPGGX4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;