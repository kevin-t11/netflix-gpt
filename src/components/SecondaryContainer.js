import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector((store) => store?.movies);
  // console.log(movies);

  return (
    <div className='bg-black'>
      <div className='-mt-80 relative z-20 pr-20'>

        <p className='text-2xl px-20 text-white font-semibold bg-center'>Now Playing</p>
        <MovieList movies={movies?.nowPlayingMovies} />

        <p className='text-2xl px-20 text-white font-semibold bg-center'>Popular</p>
        <MovieList movies={movies?.popularMovies} />

        <p className='text-2xl px-20 text-white font-semibold bg-center'>Top Rated</p>
        <MovieList movies={movies?.topRatedMovies} />

        <p className='text-2xl px-20 text-white font-semibold bg-center'>Upcoming</p>
        <MovieList movies={movies?.upcomingMovies} />
      </div>

   
    </div>
  )
}

export default SecondaryContainer;