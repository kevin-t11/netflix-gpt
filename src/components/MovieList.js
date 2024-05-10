import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  // Filter out movies with null poster_path
  const filteredMovies = movies?.filter(movie => movie.poster_path !== null);

  // Determine whether to enable slider based on the number of movies
  const enableSlider = filteredMovies?.length > 7;

  // Number of slides to show based on screen size
  const slidesToShow = enableSlider ? (window.innerWidth > 768 ? 7 : 3) : filteredMovies?.length;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
  };

  return (
    <div className='mx-5 md:mx-14'>
      {enableSlider ? (
        <Slider {...settings}>
          {filteredMovies?.map((movie, index) => (
            <div key={index}>
              <MovieCard poster_path={movie.poster_path} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className={`grid grid-cols-${slidesToShow} gap-4`}>
          {filteredMovies?.map((movie, index) => (
            <div key={index} className={`w-full md:w-full lg:w-1/${slidesToShow}`}>
              <MovieCard poster_path={movie.poster_path} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
