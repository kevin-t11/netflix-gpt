import React from 'react';
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  const isMobile = window.innerWidth <= 768; // Define mobile width breakpoint

  return (
    <div className='absolute text-gray-300 pt-[20%] md:pt-52 px-20 w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className='text-lg md:text-2xl font-bold'>{title} </h1>
      {/* Conditionally render the overview based on screen size */}
      {!isMobile && (
        <p className='hidden md:inline-block py-6 w-1/4'>{overview}</p>
      )}
      <div className='flex'>
        <button className='flex mt-4 md:mt-0 md:bg-white bg-slate-200 bg-center w-20 md:w-24 text-black font-bold py-2 md:px-6 px-3 rounded hover:opacity-80'>
          <span className='bg-center mt-1 pr-1'><FaPlay /></span> Play
        </button>
        {/* Conditionally render the "More Info" button */}
        {!isMobile && (
          <button className='flex mx-4 bg-gray-700 bg-center text-white font-bold py-2 px-6 rounded hover:opacity-80'>
            <span className='bg-center mt-1 pr-1 text-lg'><GoInfo /></span> More Info
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoTitle;
