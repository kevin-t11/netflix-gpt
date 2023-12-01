import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate = useNavigate();

  //subscribing to the store
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-4 py-4 bg-gradient-to-b from-black z-10 flex justify-between ">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          className="w-32"
        />
      </div>
      {user && (<div className="flex">
        <img
          src={user.photoURL}
          alt="usericon"
          className="w-10 h-10 rounded-lg mx-2 "
        />
        <button onClick={handleSignOut} className="font-bold">
          (Sign out)
        </button>
      </div>)}
    </div>
  );
};

export default Header;
