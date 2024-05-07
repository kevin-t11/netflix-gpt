import React from "react";

const SignoutConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-slate-200 p-7 rounded-md">
        <p className="text-lg mb-5">Are you sure you want to sign out?</p>
        <div className="mt-4 flex justify-center">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md mr-4" onClick={onConfirm}>Sign Out</button>
          <button className="bg-gray-400 text-white px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SignoutConfirmationModal;
