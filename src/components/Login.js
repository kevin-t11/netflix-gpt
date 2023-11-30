import React from "react";
import Header from "./header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix Background"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-4 text-left">
          {isSignInForm ? "Sign In Here" : "Sign Up Here"}
        </h1>
        {!isSignInForm && ( <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          className="p-4 my-5 w-full bg-gray-600 rounded-lg block"
        />)}
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="p-4 my-5 w-full bg-gray-600 rounded-lg block"
        />


        <input
          type="password"
          name="pass"
          placeholder="Password"
          className="p-4 my-5 w-full bg-gray-600 rounded-lg block"
        />
        <button className="p-3 my-6 bg-red-700 w-1/2 mx-auto rounded-lg block">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="py-4">
          {isSignInForm ? (
            <>
              New to Netflix?{" "} 
              <span
                onClick={toggleSigninForm}
                className="text-red-600 decoration-red-600 hover:text-red-800 hover:underline cursor-pointer"
              >
                Sign Up now
              </span>
            </>
          ) : (
            <>
              Already registered?{" "}
              <span
                onClick={toggleSigninForm}
                className="text-red-600 decoration-red-600 hover:text-red-800 hover:underline cursor-pointer"
              >
                Sign In now
              </span>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
export default Login;
