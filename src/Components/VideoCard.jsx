import { useEffect, useState } from "react";
import { API_Options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovie } from "../store/movieSlice";

const VideoCard = ({ id }) => {
  const dispatch = useDispatch()
  const trailerMovie = useSelector(store=>store?.movie?.trailerMovie)
  const getTrailerVideo = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_Options,
    );
    const data = await response.json();
    const FilterResult = data?.results?.filter(
      (res) => res?.type === "Trailer",
    );
    const res =  FilterResult.length ? FilterResult[0] : data?.results[0]
    dispatch(addTrailerMovie(res))

  };


  useEffect(() => {
    getTrailerVideo(id);
  }, [id]);

  if(!trailerMovie) return
  return (
    <div className="videoCardSection">
      <iframe
      className="w-full h-screen "
        // width="560"
        // height="315"
        src={`https://www.youtube.com/embed/${trailerMovie?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoCard;
