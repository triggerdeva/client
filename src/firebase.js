// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCmRkTwO7RlVoSWZvsueNobqMNG0RiRhbY",
	authDomain: "makemytrip-568ca.firebaseapp.com",
	projectId: "makemytrip-568ca",
	storageBucket: "makemytrip-568ca.appspot.com",
	messagingSenderId: "848452034593",
	appId: "1:848452034593:web:9d60e8daaafcc590dfc360",
	measurementId: "G-QT2XWQ8QQZ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider };
