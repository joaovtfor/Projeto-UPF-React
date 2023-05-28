import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCv75o96qIGD5-FKGksCf2xYT3MAEcuykM",
  authDomain: "upf-react.firebaseapp.com",
  projectId: "upf-react",
  storageBucket: "upf-react.appspot.com",
  messagingSenderId: "731067158990",
  appId: "1:731067158990:web:e9622df8c8139edd3d1b9f",
  measurementId: "G-HR9DYL4H2F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };