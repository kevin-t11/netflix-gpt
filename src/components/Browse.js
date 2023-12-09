import React from 'react';
import Header from './header';
import useNowPlaingMovies from '../hooks/useNowPlaingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  
  useNowPlaingMovies();
  
  return (
    <div>

    <Header/>
    <MainContainer/>
    <SecondaryContainer/>

    </div>
        /* 
          MovieContainer
            - VideoBackground
            - Videotitle
          SecondaryContainer
            - movielist * N
            - cards * N
        */
  )
}

export default Browse;