import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovie , addTopRatedMovies ,addupcomingmovie } from "../store/movieSlice";
import { API_Options } from "../utils/constant";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";
const SecondarySection = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_Options,
    );
    const popularMovieData = await response.json();
    console.log("popularMovieData: ", popularMovieData?.results);
    dispatch(addPopularMovie(popularMovieData?.results));
  };

    const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_Options,
    );
    const topRatedMovies = await response.json();
    dispatch(addTopRatedMovies(topRatedMovies?.results));
  };

  
    const getUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_Options,
    );
    const upcomingmovie = await response.json();
    dispatch(addupcomingmovie(upcomingmovie?.results));
  };

  const movies = useSelector((store) => store?.movie?.nowPlayingMovie);
  const popularMovie = useSelector((store) => store?.movie?.popularMovie);
  const topratedMovies = useSelector((store) => store?.movie?.topratedMovies);
  const upcomingMovies = useSelector((store) => store?.movie?.upcomingMovie);


  useEffect(() => {
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);
  return (
    <div className="SecondarySection bg-black">
      <div className="-mt-50 z-20 relative">
        <Movielist movies={movies} title={"Now Playing Movies"} />
        <Movielist movies={popularMovie} title={"Popular Movies"} />
        <Movielist movies={topratedMovies} title={"Top Rated Movies"} />
        <Movielist movies={upcomingMovies} title={"Upcoming Movies"} />
        {/* <Movielist movies={popularMovie} title={"Now Playing Movies"} /> */}
      </div>
    </div>
  );
};

export default SecondarySection;
