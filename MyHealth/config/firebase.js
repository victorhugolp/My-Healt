import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_UKU52ISjv0GMLo-R9w6W0zLi3ATbdBU',
  authDomain: 'projeto-movel-e5c74.firebaseapp.com',
  projectId: 'projeto-movel-e5c74',
  storageBucket: 'projeto-movel-e5c74.appspot.com',
  messagingSenderId: '1014807059294',
  appId: '1:1014807059294:web:dcb997680f44ec934ecdcf',
  measurementId: 'G-3NQXFSY8HW',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth};
