// firebase.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAhfwg_yfT_8j4w5_RH1jip4_IdHaSWUhQ",
    authDomain: "defi-tracker-22342.firebaseapp.com",
    projectId: "defi-tracker-22342",
    storageBucket: "defi-tracker-22342.firebasestorage.app",
    messagingSenderId: "859012012596",
    appId: "1:859012012596:web:a0295c1b3fe50dc6470861",
    measurementId: "G-CDSCYG8JLD"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
