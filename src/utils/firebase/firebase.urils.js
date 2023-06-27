import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALdEL2-0UNeQUELEMTDrYN3enZGdxSMDs",
    authDomain: "crwn-clothing-db-39612.firebaseapp.com",
    projectId: "crwn-clothing-db-39612",
    storageBucket: "crwn-clothing-db-39612.appspot.com",
    messagingSenderId: "250321315220",
    appId: "1:250321315220:web:5fac68ba1e5b2e72cadb81"
  };
  
  // Initialize Firebase
  const birebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists());  // false

    // if user data does not exist
    // create / set the document with the data from userAuth in my collection

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }

    // if user data exists
    // return userDocRef
    return userDocRef;
}

