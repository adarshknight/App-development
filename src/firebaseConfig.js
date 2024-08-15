// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAu4ztPr7wB7vwKOcWC-xolj-tyWyxKbso',
  authDomain: 'sportretail-f7a10.firebaseapp.com',
  projectId: 'sportretail-f7a10',
  storageBucket: 'sportretail-f7a10.appspot.com',
  messagingSenderId: '830477971345',
  appId: '1:830477971345:web:060c073d8fdee53613f430',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
