import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7klJAfoucyU8p-D-RUnjG_C6X2bJq-nE",
  authDomain: "casa-6449c.firebaseapp.com",
  projectId: "casa-6449c",
  storageBucket: "casa-6449c.appspot.com",
  messagingSenderId: "843556697525",
  appId: "1:843556697525:web:e50bebf7b3afb1f0f295fc"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
