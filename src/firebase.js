import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_UiPfqvryTzvy04ipWQ-45WTbuJ2L6GM",
  authDomain: "vueform-ccf93.firebaseapp.com",
  projectId: "vueform-ccf93",
  storageBucket: "vueform-ccf93.appspot.com",
  messagingSenderId: "978218277944",
  appId: "1:978218277944:web:32081e0139f3648b739acd"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {app,auth};