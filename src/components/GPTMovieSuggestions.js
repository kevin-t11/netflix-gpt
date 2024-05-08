import React from 'react'
<<<<<<< HEAD

const GPTMovieSuggestions = () => {
  return (
    <div>GPTMovieSuggestions</div>
=======
import { useSelector } from 'react-redux'
import MovieList from '../components/MovieList';

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);

  if (!movieNames)
    return null;

  return (
    <div className='mt-7 bg-black text-white bg-opacity-70'>
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
      </div>
    </div>
>>>>>>> cda557e (using a Groq-ai api key the movie suggestions will be shown and memoization implemented for the same api calls offen.)
  )
}

export default GPTMovieSuggestions