// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSoggS2HfBltshqx_wesIbQowFz-oLHbs",
  authDomain: "job-board-project-fefa8.firebaseapp.com",
  projectId: "job-board-project-fefa8",
  storageBucket: "job-board-project-fefa8.appspot.com",
  messagingSenderId: "561452628410",
  appId: "1:561452628410:web:1b8c7d5a44084a271ec583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;