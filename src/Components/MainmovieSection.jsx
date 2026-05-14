import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import VideoTitle from "./VideoTitle";

const MainmovieSection = () => {
  const movieTrailer = useSelector((store) => store?.movie?.nowPlayingMovie);
  if (movieTrailer == null) return;

//   console.log("movieTrailer: ", movieTrailer[0]);
const randomIndex = Math.floor(Math.random()* movieTrailer.length)
// console.log('randomIndex: ', randomIndex);
  const { original_title, overview, poster_path , id } = movieTrailer[randomIndex];
//   console.log('id: ', id);
  return (
    <div>
      <VideoTitle title={original_title} desc={overview} Image={poster_path}  />
      <VideoCard id={id} />
    </div>
  );
};

export default MainmovieSection;
