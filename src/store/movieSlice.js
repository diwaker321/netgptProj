import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
        trailerMovie:null,
        popularMovie:null,
        topratedMovies:null,
        upcomingMovie:null,
    },
    reducers:{
        addNowPlayingMovies:(state , action)=>{
             state.nowPlayingMovie = action.payload
        },
        addTrailerMovie:(state , action)=>{
            state.trailerMovie = action.payload
        },
        addPopularMovie:(state , action)=>{
            state.popularMovie = action.payload
        },
        addTopRatedMovies:(state , action)=>{
            state.topratedMovies = action.payload
        },
        addupcomingmovie:(state , action)=>{
            state.upcomingMovie = action.payload
        }


    }
})

export const {addNowPlayingMovies ,addTrailerMovie , addPopularMovie ,addTopRatedMovies , addupcomingmovie} = movieSlice.actions;
export default movieSlice.reducer;

