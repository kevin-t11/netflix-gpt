import React from 'react';


const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-2xl  font-bold'>{title} </h1>
      <p className='py-6 w-1/4'>{overview}</p>
      <div>
        <button className='bg-gray-700 text-white font-bold py-2 px-6 rounded'> ▹Play</button>
        <button className='mx-4 bg-gray-700 text-white font-bold py-2 px-6 rounded'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;