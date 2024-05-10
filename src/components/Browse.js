import React from 'react';
import Header from './header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';

const Browse = () => {
  const nowPlayingMovies = useNowPlayingMovies();
  const topRatedMovies = useTopRatedMovies();
  const popularMovies = usePopularMovies();
  const upcomingMovies = useUpcomingMovies();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const allLoading = nowPlayingMovies.loading || topRatedMovies.loading || popularMovies.loading || upcomingMovies.loading;

  if (allLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=''>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

// Memoize the Browse component to prevent unnecessary re-renders
export default React.memo(Browse);
