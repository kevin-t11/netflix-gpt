import React from 'react';
import { IMAGE_CDN_URL } from '../utils/constants';

const MovieCard = ({ poster_path }) => {
  if (!poster_path)
    return null;

  return (
    <div className='w-32 h-48 md:w-48 md:h-72 px-2.5 md:mt-10'>
      <img className='md:w-40 md:h-60 w-full h-40  rounded-md shadow-md object-cover' src={IMAGE_CDN_URL + poster_path} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
