import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/langConstants';
import groqai from '../utils/groqai';
import { API_OPTIONS } from '../utils/constants';
import { addgptMovieResults } from '../utils/GPTSlice';
import { BardAPI } from 'bard-api-node';

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const [searching, setSearching] = useState(false);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
      const data = await response.json();
      const filteredResults = data.results.filter(movie => ["en", "hi", "ta", "te", "kn"].includes(movie.original_language));
      return filteredResults.slice(0, 5); // Return only the first 5 filtered results
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  const handleGPTSearchClick = async () => {
    setSearching(true);

    const gptQuery = "Act as a movie recommendation system and suggest some movies for query :" +
      searchText.current.value +
      ", Please please keep in mind that give only 5 movie name not author or something else seperated by comma nothing else also keep in mind that this results will be searched onto TMDB database, like given example ahead. Example Result : Gadar, Koi Mil Gaya, Shole, Phir Hera Pheri, Lagaan. | also please please don't give the extra description also not give the number only give names seperated by comma."

    const bard = new BardAPI();
    await bard.initializeChat(process.env.REACT_APP_BARD_API_KEY);
    const bardResults = await bard.getBardResponse(gptQuery);
    const bardMovies = (bardResults?.text).split(",");

    const promiseArray = bardMovies.map(movie => searchMovieTMDB(movie.trim()));
    const tmdbMovies = await Promise.all(promiseArray);

    dispatch(addgptMovieResults({ movieNames: bardMovies, movieResults: tmdbMovies }));
    setSearching(false);
  }

  return (
    <div className='mb-10 justify-center pt-[10%] flex '>
      <form className='md:w-[55%] w-[80%] bg-slate-950 grid grid-cols-12 rounded-md shadow-md' onSubmit={(e) => e.preventDefault()}>
        <input type="text" ref={searchText} className='col-span-9 m-3 p-3 rounded-md' placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className={`bg-red-500 col-span-3  p-1.5 m-3 text-sm md:text-base text-white rounded-md ${searching ? 'cursor-not-allowed opacity-50' : ''}`} onClick={handleGPTSearchClick} disabled={searching}>
          {searching ? 'Searching...' : lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GPTSearchBar;
