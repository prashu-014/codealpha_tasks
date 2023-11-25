
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCFwQ27_uj7N9pLBkMIR_pRc8tfiHK19iI",
  authDomain: "party-maker-a7ce7.firebaseapp.com",
  projectId: "party-maker-a7ce7",
  storageBucket: "party-maker-a7ce7.appspot.com",
  messagingSenderId: "906298849123",
  appId: "1:906298849123:web:efbce3b4021d29abdd0556",
  measurementId: "G-VGLFE3LSLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export {app,auth};