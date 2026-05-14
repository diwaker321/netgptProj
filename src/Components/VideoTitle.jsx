
const VideoTitle = ({title , desc, Image}) => {
    // console.log('Image: ', Image);
    // console.log('desc: ', desc);
    // console.log('title: ', title);
  return (
    <div className="VideoTitleContainer">
    <h1>{title}</h1>
    <h1>{desc}</h1>
    <h1>{Image}</h1>
    </div>
  )
}

export default VideoTitle
