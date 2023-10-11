import React, { useEffect, useState } from 'react'
import { Youtube_video_api } from '../utils/constant';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
      getVideos();
    },[]);

   const getVideos = async () =>{
    const data = await fetch(Youtube_video_api);
    const json = await data.json();
    setVideos(json.items);
   }
 
  return (!videos)? <Shimmer/> : (
    <div className='flex flex-wrap'> 
       {videos.map(videos => (
          <Link to={"/watch?v="+videos.id}><VideoCards key={videos.id} info = {videos}/></Link>))}
    </div>
  )
}

export default VideoContainer