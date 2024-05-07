import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const playerRef = useRef(null);
  const loading = useMovieTrailer(movieId); // Use the loading state from the custom hook

  useEffect(() => {
    const player = playerRef.current;

    if (player && trailerVideo) {
      player.src = `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`;
    }
  }, [trailerVideo]);

  return (
    <div>
      {loading ? ( // Conditionally render loading indicator
        <div>Loading...</div>
      ) : (
        trailerVideo && (
          <iframe
            ref={playerRef}
            className='w-screen aspect-video'
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        )
      )}
    </div>
  );
};

export default VideoBackground;
