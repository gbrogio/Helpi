import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth, GoogleAuthProvider, onIdTokenChanged, signOut, signInWithRedirect,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MENSSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (getApps().length < 1) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
const providerGoogle = new GoogleAuthProvider();

const authParams = {
  auth,
  providers: {
    google: providerGoogle,
  },
  onIdTokenChanged,
  signInWithRedirect,
  signOut,
};

export {
  authParams,
};
