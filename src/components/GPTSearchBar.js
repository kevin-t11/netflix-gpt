import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/langConstants';
import groqai from '../utils/groqai';
import { API_OPTIONS } from '../utils/constants';
import { addgptMovieResults } from '../utils/GPTSlice';


const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const dispatch = useDispatch();

  //function to search the movies from the TMDB api
  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
      const data = await response.json();
      // Filter results based on original_language
      const filteredResults = data.results.filter(movie => ["en", "hi", "ta", "te", "kn"].includes(movie.original_language));
      // Return only the first 5 filtered results
      return filteredResults
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }


  const handleGPTSearchClick = async () => {

    const gptQuery = "Act as a movie recommendation system and suggest some movies for query :" +
      searchText.current.value +
      ", Please please keep in mind that give only 5 movie name not author or something else seperated by comma nothing else also keep in mind that this results will be searched onto TMDB database, like given example ahead. Example Result : Gadar, Koi Mil Gaya, Shole, Phir Hera Pheri, Lagaan. | also please please don't give the extra description like `Here are some horror/comedy movie recommendations:, I'm happy to help` only give movie title array."

    const groqResults = await groqai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery,
        }
      ],
      model: "llama3-8b-8192"
    });

    // console.log(groqResults.choices[0]?.message?.content || "");
    const groqMovies = (groqResults.choices[0]?.message?.content).split(", ");
    console.log(groqMovies);

    const promiseArray = groqMovies.map(movie => searchMovieTMDB(movie));
    const tmdbMovies = await Promise.all(promiseArray);
    console.log(tmdbMovies);

    dispatch(addgptMovieResults({movieNames : groqMovies, movieResults : tmdbMovies}));
  }


  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-slate-950 grid grid-cols-12 rounded-md shadow-md' onSubmit={(e) => e.preventDefault()}>
        <input type="text" ref={searchText} className='col-span-9 m-3 p-3 rounded-md' placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className='bg-red-500 col-span-3 p-1.5 m-3 text-white rounded-md' onClick={handleGPTSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GPTSearchBar