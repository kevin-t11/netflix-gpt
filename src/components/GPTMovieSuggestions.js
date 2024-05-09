import React from 'react'
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
  )
}

export default GPTMovieSuggestions