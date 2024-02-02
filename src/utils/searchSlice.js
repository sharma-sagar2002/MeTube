import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState: {
        searchResults: [],
    },
    reducers : {
        addSearchResults: (state,action)=>{
            state.searchResults.length=0;
           state.searchResults.push(action.payload);
        },
    }
});
export const {addSearchResults} = searchSlice.actions;
export default searchSlice.reducer;