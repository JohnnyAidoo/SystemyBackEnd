// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsP-qFl2Hnrq9nobbPd1URnM4Gt7tZ0nc",
  authDomain: "systemy-880fd.firebaseapp.com",
  projectId: "systemy-880fd",
  storageBucket: "systemy-880fd.appspot.com",
  messagingSenderId: "472578550300",
  appId: "1:472578550300:web:b5b97831b0da059516cdd9",
  measurementId: "G-8VKNL40E3D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
