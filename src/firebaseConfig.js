
// // // import { initializeApp } from "firebase/app";
// // import firebase from 'firebase/compat/app'
// // import 'firebase/compat/auth'
// // import 'firebase/compat/database'

// // const firebaseConfig = {
// //   apiKey: "AIzaSyAq-WCLccBV2UmHgIF8Wl3uk5-lnIY63Tw",
// //   authDomain: "fir-auth-d311f.firebaseapp.com",
// //   projectId: "fir-auth-d311f",
// //   storageBucket: "fir-auth-d311f.firebasestorage.app",
// //   messagingSenderId: "1093277466992",
// //   appId: "1:1093277466992:web:1d8a8db585255074c84fb5"
// // };


// // const app = firebase.initializeApp(firebaseConfig);
// // export default app;


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/database';

// const firebaseConfig = {
//   apiKey: "AIzaSyAq-WCLccBV2UmHgIF8Wl3uk5-lnIY63Tw",
//   authDomain: "fir-auth-d311f.firebaseapp.com",
//   projectId: "fir-auth-d311f",
//   storageBucket: "fir-auth-d311f.appspot.com", // ✅ FIXED typo
//   messagingSenderId: "1093277466992",
//   appId: "1:1093277466992:web:1d8a8db585255074c84fb5"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth(); // ✅ Explicitly export auth instance

// export { auth }; // ✅ Now you can import auth in other files
// export default app;




import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// ✅ Firebase Configuration (Replace with your credentials)
const firebaseConfig = {
  apiKey: "AIzaSyAq-WCLccBV2UmHgIF8Wl3uk5-lnIY63Tw",
  authDomain: "fir-auth-d311f.firebaseapp.com",
  projectId: "fir-auth-d311f",
  storageBucket: "fir-auth-d311f.appspot.com", // ✅ Fixed typo
  messagingSenderId: "1093277466992",
  appId: "1:1093277466992:web:1d8a8db585255074c84fb5",
};

// ✅ Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database(); // ✅ Added database instance

// ✅ Export Firebase modules
export { auth, database };
export default app;
