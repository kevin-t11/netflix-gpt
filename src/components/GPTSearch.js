import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="absolute -z-10">
=======
      <div className="fixed -z-10">
>>>>>>> cda557e (using a Groq-ai api key the movie suggestions will be shown and memoization implemented for the same api calls offen.)
        <img
          src={BG_URL} alt="Netflix Background"
        />
      </div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch;