import { initializeApp, FirebaseApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMkqyHHVLkt1UiKDffUbI1zt0uW3JDCDo",
  authDomain: "ratemyhousing-74082.firebaseapp.com",
  projectId: "ratemyhousing-74082",
  storageBucket: "ratemyhousing-74082.appspot.com",
  messagingSenderId: "488401998689",
  appId: "1:488401998689:web:f92ab58930f35fb8e2ab20",
  measurementId: "G-MB1N4LYYTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();