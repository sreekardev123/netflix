//  import React from "react";
// import Layout from "../Layout/Layout";
// import logoimg from "../assets/logoimg.png";
// import { Input } from "../Components/UsedInputs";
// import { Link } from "react-router-dom";
// import { FiLogIn } from "react-icons/fi";

// function Login() {
//   return (
//     <Layout>
//       <div className="container mx-auto px-2 my-24 flex-colo">
//         <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
//           {/* Place the image inside the container */}
//           <img
//             src={logoimg}
//             alt="logo"
//             className="w-32 h-12 object-contain mb-6"
//           />
//           <Input
//           label="Email"
//           placeholder="Enter Your Email"
//           type="email"
//           bg={true}
//           />
//           <Input
//           label="Password"
//           placeholder="Enter you Password"
//           type="password"
//           bg={true}
//           />

//           <Link to="/home" className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full">
//           <FiLogIn /> Sign In
//           </Link>
//           <p className="text-center text-border">
//             Don't Have An Account?{" "}
//             <Link to="/register" className="text-dryGray font-semibold ml-2">
//             Sign Up
//             </Link>

//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Login;

import React from "react";
import Layout from "../Layout/Layout";
import logoimg from "../assets/logoimg.png";
import { Input } from "../Components/UsedInputs";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

function Login() {
  const navigate = useNavigate();

  // Function to handle Guest Login
  const handleGuestLogin = () => {
    navigate("/home"); // Navigate to the home page
  };

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

          {/* Input Fields */}
          <Input
            label="Email"
            placeholder="Enter Your Email"
            type="email"
            bg={true}
          />
          <Input
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            bg={true}
          />

          {/* Sign In Button */}
          <Link
            to="/home"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign In
          </Link>

          {/* Guest Login Button */}
          <button
            onClick={handleGuestLogin}
            className="bg-main hover:bg-gray-500 transitions text-white p-4 rounded-lg w-full mt-4"
          >
            Continue as Guest
          </button>

          {/* Sign Up Redirect */}
          <p className="text-center text-border mt-4">
            Don't Have An Account?{" "}
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;


