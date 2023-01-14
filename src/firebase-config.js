// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBY6JylP2xeLwO8F6wC3rAOmUMVG6L3uhk',
  authDomain: 'whereswaldo-e1175.firebaseapp.com',
  projectId: 'whereswaldo-e1175',
  storageBucket: 'whereswaldo-e1175.appspot.com',
  messagingSenderId: '437376029104',
  appId: '1:437376029104:web:a5e9ced226b4d4b5c88675',
  measurementId: 'G-QLJX0LNT2Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db };
