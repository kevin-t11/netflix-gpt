import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector((store) => store?.movies);
  // console.log(movies);

  return (
    <div className='bg-black'>
      <div className='-mt-80 relative z-20 pr-20'>

        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
      </div>

      {/* 

        movie list - popular
          - for each list having horizontal rows with mutliple movie card  
        movie list - now playing
        movie list - trending
        movie list - horror

       */}
    </div>
  )
}

export default SecondaryContainer;