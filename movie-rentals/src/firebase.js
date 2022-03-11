// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore'
// import { 
//   browserLocalPersistence,
//   inMemoryPersistence,
//   indexedDBLocalPersistence,
//   initializeAuth,
// } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC27OWGcUbY1Al40FqE-s-061hqPEoln8g",
  authDomain: "movie-rentals-d6bf0.firebaseapp.com",
  projectId: "movie-rentals-d6bf0",
  storageBucket: "movie-rentals-d6bf0.appspot.com",
  messagingSenderId: "670663763627",
  appId: "1:670663763627:web:70a2c67f0071598b4d39ee"
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const db = getFirestore(app);
// export const auth = initializeAuth(app, {
//   persistence:
//     typeof window === 'undefined'
//       ? inMemoryPersistence
//       : [indexedDBLocalPersistence, browserLocalPersistence],
// });
export const auth = app.auth();
export default app;

