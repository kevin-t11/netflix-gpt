import React, { useState } from "react";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANG } from "../utils/constants";
import SignoutConfirmationModal from './SignoutConfirmModel'
import { toggleShowGPTSearch } from "../utils/GPTSlice";
import { changeLanguage } from '../utils/configSlice';
import { IoHome } from "react-icons/io5";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  // subscribing to the store
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleConfirmSignOut = () => {
    handleSignOut();
    setIsConfirmModalOpen(false);
  };

  const handleGptSearchClick = () => {
    dispatch(toggleShowGPTSearch());
  }
  const handleChangeLanguage = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-4 py-4 bg-gradient-to-b from-black z-10 flex justify-between ">
      <div>
        <img src={LOGO} alt="Netflix Logo" className="w-32" />
      </div>
      {user && (
        <div className="flex">
          {showGPTSearch && (<select className="p-2 mr-4 bg-gray-700 text-white rounded-md" onChange={handleChangeLanguage}>
            {SUPPORTED_LANG.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}

          <button
            className="font-semibold text-white bg-purple-500 px-2 mr-4 rounded-md" onClick={handleGptSearchClick}>
            {showGPTSearch ? <p className="flex pr-2">Home <span className="bg-center mt-1 ml-2"><IoHome /></span></p> : "GPT Search"}
          </button>
          <img
            src={user.photoURL}
            alt="usericon"
            className="w-10 h-10 rounded-lg mr-4"
          />
          <button
            className="font-semibold text-white bg-red-600 px-2 mr-4 rounded-md"
            onClick={() => setIsConfirmModalOpen(true)}
          >
            Sign out
          </button>
        </div>
      )}
      <SignoutConfirmationModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={handleConfirmSignOut}
      />
    </div>
  );
};

export default Header;