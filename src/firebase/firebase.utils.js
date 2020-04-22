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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;