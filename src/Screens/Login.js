// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firebaseConfig"; // Import Firebase auth
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { FiLogIn } from "react-icons/fi";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import registerimg from "../assets/registerimg.png";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Function to handle Login
//   const handleSignIn = async (e) => {
//     e.preventDefault();
    
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       if (userCredential.user) {
//         toast.success("Login Successful!");
//         setTimeout(() => navigate("/home"), 2000); // Redirect after success
//       }
//     } catch (error) {
//       toast.error("Email and Password do not match. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-300">
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

//       <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">

//         {/* Left Side - Welcome Section */}
//         <div
//           className="w-1/2 hidden md:flex flex-col justify-center items-center bg-cover bg-center text-white p-8"
//           style={{ backgroundImage: `url(${registerimg})` }}
//         >
//           <h2 className="text-2xl font-bold">Welcome to NetMirror</h2>
//           <p className="mt-2 text-center text-sm">
//             Experience a seamless way to explore and enjoy entertainment like never before.
//           </p>
//           <Link to="/learn-more" className="mt-3 text-blue-300 underline">
//             Learn more
//           </Link>
//         </div>

//         {/* Right Side - Login Form */}
//         <div className="w-full md:w-1/2 p-8">
//           <h2 className="text-2xl font-bold text-gray-800">Login</h2>
//           <p className="text-gray-600 text-sm mb-4">Sign in to your account</p>

//           {/* Input Fields */}
//           <input
//             placeholder="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border rounded-md p-2 w-full mt-3"
//           />
//           <input
//             placeholder="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border rounded-md p-2 w-full mt-3"
//           />

//           {/* Sign In Button */}
//           <button
//             onClick={handleSignIn}
//             className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
//           >
//             <FiLogIn className="inline-block mr-2" /> Sign In
//           </button>

//           {/* Sign Up Redirect */}
//           <p className="text-sm text-gray-600 mt-4 text-center">
//             Don't have an account?{" "}
//             <Link to="/register" className="text-blue-500 font-semibold">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";
import { FiLogIn } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerimg from "../assets/registerimg.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle Login
  const handleSignIn = async (e) => {
    e.preventDefault();
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        toast.success("Login Successful!");
        setTimeout(() => navigate("/home"), 2000); // Redirect after success
      }
    } catch (error) {
      toast.error("Email and Password do not match. Please try again.");
    }
  };

  // Function to continue as guest
  const handleGuestLogin = () => {
    toast.success("Continuing as guest...");
    setTimeout(() => navigate("/home"), 2000); // Redirect as guest after success
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-300">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">

        {/* Left Side - Welcome Section */}
        <div
          className="w-1/2 hidden md:flex flex-col justify-center items-center bg-cover bg-center text-white p-8"
          style={{ backgroundImage: `url(${registerimg})` }}
        >
          <h2 className="text-2xl font-bold">Welcome to NetMirror</h2>
          <p className="mt-2 text-center text-sm">
            Experience a seamless way to explore and enjoy entertainment like never before.
          </p>
          <Link to="/learn-more" className="mt-3 text-blue-300 underline">
            Learn more
          </Link>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p className="text-gray-600 text-sm mb-4">Sign in to your account</p>

          {/* Input Fields */}
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md p-2 w-full mt-3"
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md p-2 w-full mt-3"
          />

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            <FiLogIn className="inline-block mr-2" /> Sign In
          </button>

          {/* Continue as Guest Button */}
          <button
            onClick={handleGuestLogin}
            className="mt-4 w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Continue as Guest
          </button>

          {/* Sign Up Redirect */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
