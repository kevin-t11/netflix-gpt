import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

    // console.log(title);
    // console.log(movies);

    return (
        <div>
            <p className='text-2xl text-white font-semibold px-20 bg-center'>{title}</p>
            <div className='flex overflow-x-scroll'>
                <div className='flex pl-20'>
                    {movies && movies.map((movie, index) => (
                        <MovieCard key={index} poster_path={movie?.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;