// movieSlice.js

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo : null,
    topRatedMovies : null,
    popularMovies:null,
    upcomingMovies : null,
  },
  reducers: {
    addNowPlayingMovies:(state, action) =>{
      state.nowPlayingMovies = action.payload;  
    },
    addTopRatedMovies:(state,action) => {
      state.topRatedMovies = action.payload;
    },
    addPopularMovies:(state,action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies:(state,action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo : (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addTopRatedMovies, addPopularMovies, addUpcomingMovies } = movieSlice.actions;  
export default movieSlice.reducer;
