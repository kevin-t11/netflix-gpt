import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);

  if (!movieNames || !movieResults)
    return null;

  return (
    <div>
      {movieNames.map((movieName, nameIndex) => (
        <div key={nameIndex}>
          <div className="mx-5 md:mx-0 text-white text-2xl font-bold my-5">
            Related to " <span className="text-red-500">{movieName}</span> "
          </div>
          <div className='mx-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {movieResults[nameIndex].map((movie, index) => (
              <MovieCard key={index} poster_path={movie.poster_path} />
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
