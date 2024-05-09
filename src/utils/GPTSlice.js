import { createSlice } from "@reduxjs/toolkit";


const GPTSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPTSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleShowGPTSearch: (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addgptMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const {toggleShowGPTSearch, addgptMovieResults} = GPTSlice.actions;

export default GPTSlice.reducer;
