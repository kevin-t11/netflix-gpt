import { createSlice } from "@reduxjs/toolkit";


const GPTSlice = createSlice({
<<<<<<< HEAD
    name :'gpt',
    initialState :  {
        showGPTSearch :false,
    },
    reducers : {
        toggleShowGPTSearch : (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
    }
});

export const {toggleShowGPTSearch} = GPTSlice.actions;
=======
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

export const { toggleShowGPTSearch, addgptMovieResults } = GPTSlice.actions;
>>>>>>> cda557e (using a Groq-ai api key the movie suggestions will be shown and memoization implemented for the same api calls offen.)

export default GPTSlice.reducer;
