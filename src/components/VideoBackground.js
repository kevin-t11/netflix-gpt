import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const loading = useMovieTrailer(movieId);


  // console.log(trailerVideo?.key);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        trailerVideo && ( 
          <div>
            <iframe
              className='w-screen aspect-video'
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
            ></iframe>
          </div>
        )
      )}
    </div>
  );
};

export default VideoBackground;
