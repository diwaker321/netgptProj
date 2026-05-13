import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null
    },
    reducers:{
        addNowPlayingMovies:(state , action)=>{
             state.nowPlayingMovie = action.payload

        }
    }
})

export const {addNowPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;

