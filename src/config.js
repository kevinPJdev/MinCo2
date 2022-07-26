import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyCh4HXB-auU_Da4IaXwFJM5qbD55dD9-Ao",
  authDomain: "minco2-72c97.firebaseapp.com",
  projectId: "minco2-72c97",
  storageBucket: "minco2-72c97.appspot.com",
  messagingSenderId: "133518509613",
  appId: "1:133518509613:web:997ac7d36679c379d19aa4",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
