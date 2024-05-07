import React from 'react';
import Header from './header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'; // Correct import statement
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  const nowPlayingMovies = useNowPlayingMovies(); // Corrected usage of useNowPlayingMovies
  const topRatedMovies = useTopRatedMovies();
  const popularMovies = usePopularMovies();
  const upcomingMovies = useUpcomingMovies();

  const allLoading = nowPlayingMovies.loading || topRatedMovies.loading || popularMovies.loading || upcomingMovies.loading;

  if (allLoading) {
    // You can replace this with your loading component
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
