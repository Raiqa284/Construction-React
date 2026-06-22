import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw4p28RteHGlHqzaZkjU2Il6WaGQvgCZ8",
  authDomain: "azeez-login.firebaseapp.com",
  projectId: "azeez-login",
  storageBucket: "azeez-login.firebasestorage.app",
  messagingSenderId: "227222115001",
  appId: "1:227222115001:web:7b95a5e4abc598c268c168",
  measurementId: "G-BP74RZ8TTQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;