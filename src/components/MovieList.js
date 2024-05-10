import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Filter out movies with null poster_path
  const filteredMovies = movies?.filter(movie => movie.poster_path !== null);

  // Determine whether to enable slider based on the number of movies
  const enableSlider = filteredMovies?.length > 6;

  return (
    <div className='pl-20'>
      {enableSlider ? (
        <Slider {...settings}>
          {filteredMovies?.map((movie, index) => (
            <div key={index}>
              <MovieCard poster_path={movie.poster_path} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex flex-wrap">
          {filteredMovies?.map((movie, index) => (
            <div key={index} className="w-1/7">
              <MovieCard poster_path={movie.poster_path} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
