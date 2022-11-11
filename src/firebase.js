// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHzRq0cesl_raqMRU-43d4zLq-YTkMtls",
  authDomain: "auth189.firebaseapp.com",
  projectId: "auth189",
  storageBucket: "auth189.appspot.com",
  messagingSenderId: "385359847426",
  appId: "1:385359847426:web:80613c46802736fa21871b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle =()=>{
    signInWithPopup(auth, provider).then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    })
    .catch((error)=>{
        console.log(error);
    })
}


// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };