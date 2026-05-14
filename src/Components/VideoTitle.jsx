import { imageURL } from "../utils/constant"

const VideoTitle = ({title , desc, Image}) => {
  console.log('Image: ', Image);
    // console.log('Image: ', Image);
    // console.log('desc: ', desc);
    // console.log('title: ', title);
  return (
    <div className="VideoTitleContainer absolute text-white pt-40 ps-15 bg-gradient-to-r w-full aspect-video from-black/80 to-transparent">
    <img className="w-40 h-40 object-cover rounded-full my-5" src={`${imageURL}${Image}`} alt="" />
    {/* <h1 className="text-5xl font-semibold py-6">{title}</h1> */}
    <h1 className="w-1/3 text-sm pb-6 ps-2">{desc}</h1>
    {/* <h1>{Image}</h1> */}
    <div className="buttonSection ps-2">
      <button className="bg-gray-500/60 hover:bg-gray-500/40 px-12 py-2 rounded-md text-xl cursor-pointer">Play</button>
    </div>
    </div>
  )
}

export default VideoTitle
