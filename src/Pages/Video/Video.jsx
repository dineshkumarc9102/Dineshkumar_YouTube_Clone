import React from 'react'
import './Video.css'
import Player from '../../Components/Player/Player'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const { videoId, categoryId } = useParams();
  
  return (
    <div className='play-container'>
      <Player videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
