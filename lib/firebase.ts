import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChSRTpGb2fnnsb7779MKfzQK_kqWRc1mg",
  authDomain: "gpep-prototype.firebaseapp.com",
  projectId: "gpep-prototype",
  storageBucket: "gpep-prototype.firebasestorage.app",
  messagingSenderId: "284214083316",
  appId: "1:284214083316:web:587569182f79d8d5d6a8a1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);