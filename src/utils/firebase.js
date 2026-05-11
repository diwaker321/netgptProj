// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDdgUj6O73q-Yku_Szq8Gk6bXMj-0s_Alg",
  authDomain: "netflixproject-448e3.firebaseapp.com",
  projectId: "netflixproject-448e3",
  storageBucket: "netflixproject-448e3.firebasestorage.app",
  messagingSenderId: "406216519977",
  appId: "1:406216519977:web:74436f8b5616d089024738",
  measurementId: "G-XXZ4JNFSE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// const analytics = getAnalytics(app);