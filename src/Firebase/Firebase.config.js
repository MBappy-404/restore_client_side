// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  apiKey: "AIzaSyDJRfqL_eOgH5ue2JoTWds-tgUdE9bhx5o",
  authDomain: "restore-10096.firebaseapp.com",
  projectId: "restore-10096",
  storageBucket: "restore-10096.appspot.com",
  messagingSenderId: "929931463623",
  appId: "1:929931463623:web:0bf4fdf6cf83f9ac2b67e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;