import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
        trailerMovie:null,
    },
    reducers:{
        addNowPlayingMovies:(state , action)=>{
             state.nowPlayingMovie = action.payload
        },
        addTrailerMovie:(state , action)=>{
            state.trailerMovie = action.payload

        }

    }
})

export const {addNowPlayingMovies ,addTrailerMovie} = movieSlice.actions;
export default movieSlice.reducer;

