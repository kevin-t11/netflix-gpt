import React from 'react';
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute text-gray-300 pt-[14%] px-20 w-screen aspect-video bg-gradient-to-r from-black '>
      <h1 className='text-2xl  font-bold'>{title} </h1>
      <p className='py-6 w-1/4'>{overview}</p>
      <div className='flex'>
        <button className='flex bg-white bg-center w-24 text-black font-bold py-2 px-6 rounded hover:opacity-80'> <span className='bg-center mt-1 pr-1'><FaPlay /></span> Play</button>
        <button className='flex mx-4 bg-gray-700 bg-center text-white font-bold py-2 px-6 rounded hover:opacity-80'> <span className='bg-center mt-1 pr-1 text-lg' > <GoInfo /> </span> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;