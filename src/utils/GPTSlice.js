import { createSlice } from "@reduxjs/toolkit";


const GPTSlice = createSlice({
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

export default GPTSlice.reducer;
