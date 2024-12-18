// // src/firebase/firebase.js
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyAEMPxwSeROlL5vc9aeBwc1_FAt7eBMkXA",
//   authDomain: "first-firebase-demo-10pearls.firebaseapp.com",
//   projectId: "first-firebase-demo-10pearls",
//   storageBucket: "first-firebase-demo-10pearls.firebasestorage.app",
//   messagingSenderId: "997005579250",
//   appId: "1:997005579250:web:f462f886d00aca2247916b"
// };

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const db = firebase.firestore();


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEMPxwSeROlL5vc9aeBwc1_FAt7eBMkXA",
  authDomain: "first-firebase-demo-10pearls.firebaseapp.com",
  projectId: "first-firebase-demo-10pearls",
  storageBucket: "first-firebase-demo-10pearls.firebasestorage.app",
  messagingSenderId: "997005579250",
  appId: "1:997005579250:web:f462f886d00aca2247916b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
