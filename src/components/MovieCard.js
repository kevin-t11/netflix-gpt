import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants';


const MovieCard = ({ poster_path }) => {

  // console.log(poster_path);
  if (!poster_path)
    return null;
  return (
    <div className='w-48 px-2.5'>
      <img className='rounded-md shadow-md my-4' src={IMAGE_CDN_URL + poster_path} alt="Movie Poster" />
    </div>
  )
}

export default MovieCard