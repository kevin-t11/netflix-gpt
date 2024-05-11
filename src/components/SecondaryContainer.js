import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className='bg-black mt-[78%] md:mt-0'>
      <div className='-mt-80 relative z-20'>

        <p className='md:text-2xl text-xl md:mx-16 mx-5 md:-mb-10 text-white font-semibold bg-center'>Now Playing</p>
        <MovieList movies={movies?.nowPlayingMovies} />

        <p className='md:text-2xl text-xl md:mx-16 mx-5 md:-mb-10 text-white font-semibold bg-center'>Popular</p>
        <MovieList movies={movies?.popularMovies} />

        <p className='md:text-2xl text-xl md:mx-16 mx-5 md:-mb-10 text-white font-semibold bg-center'>Top Rated</p>
        <MovieList movies={movies?.topRatedMovies} />

        <p className='md:text-2xl text-xl md:mx-16 mx-5 md:-mb-10 text-white font-semibold bg-center'>Upcoming</p>
        <MovieList movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
