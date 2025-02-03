import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import registerimg from "../assets/registerimg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError(""); 

    // Validate Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    // Validate Password Length
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      if (userCredential.user) {
        toast.success("Account Created Successfully!");
        setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-300">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-1/2 hidden md:flex flex-col justify-center items-center bg-cover bg-center text-white p-8"
          style={{ backgroundImage: `url(${registerimg})` }}
        >
          <h2 className="text-2xl font-bold">Welcome to NetMirror</h2>
          <p className="mt-2 text-center text-sm">
            Sign up and enjoy our amazing services.
          </p>
          <Link to="/learn-more" className="mt-3 text-blue-300 underline">
            Learn more
          </Link>
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800">Register</h2>
          <p className="text-gray-600 text-sm mb-4">
            Create your account. It’s free and only takes a minute.
          </p>

          <input
            placeholder="User Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
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

          <div className="flex items-center mt-3">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm text-gray-600">
              I accept the <Link to="#" className="text-blue-500 underline">Terms of Use</Link> &{" "}
              <Link to="#" className="text-blue-500 underline">Privacy Policy</Link>
            </p>
          </div>

          <button
            onClick={submit}
            className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Register Now
          </button>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
