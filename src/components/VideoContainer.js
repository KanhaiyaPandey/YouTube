import React, { useEffect, useState } from 'react'
import { Youtube_video_api } from '../utils/constant';
import VideoCards from './VideoCards';

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
      getVideos();
    },[]);

   const getVideos = async () =>{
    const data = await fetch(Youtube_video_api);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
   }

  return (
    <div className='flex flex-wrap'> 
       {videos.map(videos => <VideoCards key={videos?.info?.id} info = {videos}/>)}
    </div>
  )
}

export default VideoContainer