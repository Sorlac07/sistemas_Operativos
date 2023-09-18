// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfUpEgG0yc9eNdZOqAhh0ZndV3zCfWz4A",
  authDomain: "fb-examenfinal.firebaseapp.com",
  projectId: "fb-examenfinal",
  storageBucket: "fb-examenfinal.appspot.com",
  messagingSenderId: "732491625187",
  appId: "1:732491625187:web:9120dcd43c3140514bcbd6",
  measurementId: "G-95EZYR8M4Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
