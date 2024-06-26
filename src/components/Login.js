import React, { useState, useRef } from "react";
import Header from "./header";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate the form data
    const msg = checkValidData(email.current.value, password.current.value);

    setErrorMessage(msg);

    if (msg) return;

    // Sign in/ Sign up validation logic
    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/99701249?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User not found. Please check your credentials.");
        });
    }
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute inset-0 w-full h-full">
        <img
          src={BG_URL}
          alt="Netflix Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 md:w-11/12 mt-8 max-w-md p-8 md:p-12 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold py-3 text-left">
          {isSignInForm ? "Sign In Here" : "Sign Up Here"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullname}
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="p-4 my-5 w-full bg-gray-600 rounded-lg block"
          />
        )}
        <input
          ref={email}
          type="text"
          name="email"
          placeholder="Email address"
          className="p-4 my-5 w-full bg-gray-600 rounded-lg block"
        />

        <div className="relative">
          <input
            ref={password}
            type={showPassword ? "text" : "password"} 
            name="pass"
            placeholder="Password"
            className="p-4 my-5 w-full bg-gray-600 rounded-lg block"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} 
          </button>
        </div>

        <p className="text-red-500 text-base font-bold p-2">{errorMessage}</p>
        <button
          type="submit"
          className="p-3 my-6 bg-red-700 w-1/2 mx-auto rounded-lg block"
        >
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
