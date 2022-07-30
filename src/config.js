import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export const firebaseConfig = {
  // apiKey: "AIzaSyCh4HXB-auU_Da4IaXwFJM5qbD55dD9-Ao",
  // authDomain: "minco2-72c97.firebaseapp.com",
  // projectId: "minco2-72c97",
  // storageBucket: "minco2-72c97.appspot.com",
  // messagingSenderId: "133518509613",
  // appId: "1:133518509613:web:997ac7d36679c379d19aa4",

  // New Firebase Config
  apiKey: "AIzaSyDM7g2cbC3uD0FzvRzsdiYiFD_kXskUOfE",
  authDomain: "minco2-app.firebaseapp.com",
  projectId: "minco2-app",
  storageBucket: "minco2-app.appspot.com",
  messagingSenderId: "1058144193509",
  appId: "1:1058144193509:web:5f4b30da0e818d2707fd0c",
  measurementId: "G-LKP5VCWTQQ",
  
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
