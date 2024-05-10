import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
      {/* Background overlay  */}
      <div className="fixed inset-0 z-0 bg-black opacity-75"></div>

      {/* Blurred background image */}
      <div className="fixed inset-0 -z-10 backdrop-filter backdrop-blur-md">
        <img className='object-cover w-full h-full' src={BG_URL} alt="Netflix Background" />
      </div>

      <div className='pt-24 md:pt-0 md:px-8 lg:px-20 relative z-10'>
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
