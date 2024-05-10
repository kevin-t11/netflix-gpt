import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  // const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  if (!movies || movies.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  
  const { original_title, overview, id } = randomMovie;

  // Truncate overview text if it exceeds 150 characters
  const truncatedOverview = overview.length > 200 ? overview.slice(0, 200) + '...' : overview;

  return (
    <div className='md:pt-0 pt-[20%] bg-black'>
      <VideoTitle title={original_title} overview={truncatedOverview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

// Memoize the MainContainer component to prevent unnecessary re-renders
export default React.memo(MainContainer);
