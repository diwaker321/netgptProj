import React from 'react'
import { imageURL } from '../utils/constant'

const MovieCard = ({imgPath}) => {
  return (
    // <div className='mainMovieCard flex cursor-pointer'>
    <img src={imageURL+imgPath} className='w-52 cursor-pointer' alt="" />
    // </div>
  )
}

export default MovieCard
