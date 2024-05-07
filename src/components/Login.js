import React from "react";
import Header from "./header";
import { useState } from "react";
import { useRef } from "react";
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

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
          // console.log(user);
          // navigate("/browse");
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
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL} alt="Netflix Background"
        />
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold py-4 text-left">
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

        <input
          ref={password}
          type="password"
          name="pass"
          placeholder="Password"
          className="p-4 my-5 w-full bg-gray-600 rounded-lg block"
        />
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
