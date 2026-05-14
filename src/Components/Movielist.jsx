import React from "react";
import MovieCard from "./MovieCard";
// import { useSelector } from "react-redux";

const Movielist = ({movies,title}) => {
//   const movies = useSelector((store) => store?.movie?.nowPlayingMovie);
//   console.log("movies: ", movies);
  return (
    <div className="mainMovieList   ">
    <div className="title ps-5 ">
        <h1 className="text-white/80 text-xl font-medium py-2">{title}</h1>
    </div>
    <div className="flex overflow-x-scroll scrollbar-hide ">
      {movies?.map((res) => {
        return <MovieCard key={res?.id} imgPath={res?.poster_path} />;
      })}
    </div>
    </div>
  );
};

export default Movielist;
