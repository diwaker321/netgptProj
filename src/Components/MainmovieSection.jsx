import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import VideoTitle from "./VideoTitle";

const MainmovieSection = () => {
  const movieTrailer = useSelector((store) => store?.movie?.nowPlayingMovie);
  if (movieTrailer == null) return;

//   console.log("movieTrailer: ", movieTrailer[0]);
  const { original_title, overview, poster_path , id } = movieTrailer[0];
//   console.log('id: ', id);
  return (
    <div>
      <VideoCard id={id} />
      <VideoTitle title={original_title} desc={overview} Image={poster_path}  />
    </div>
  );
};

export default MainmovieSection;
