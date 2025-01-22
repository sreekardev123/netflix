import React from "react";
import Layout from "../Layout/Layout";
import logoimg from "../assets/logoimg.png";
import { Input } from "../Components/UsedInputs";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

function Register() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          {/* Place the image inside the container */}
          <img
            src={logoimg}
            alt="logo"
            className="w-32 h-12 object-contain mb-6"
          />
           <Input
          label="Name"
          placeholder="Enter Your FullName"
          type="text"
          bg={true}
          />
          <Input
          label="Email"
          placeholder="Enter Your Email"
          type="email"
          bg={true}
          />
          <Input
          label="Password"
          placeholder="Enter you Password"
          type="password"
          bg={true}
          />

          <Link to="/signup" className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full">
          <FiLogIn /> Sign Up
          </Link>
          <p className="text-center text-border">
            Already Have An Account?{" "}
            <Link to="/login" className="text-dryGray font-semibold ml-2">
            Sign In
            </Link>

          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
