import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import {  Link, useSearchParams } from 'react-router-dom';
import { Youtube_video_api } from '../utils/constant';
import Suggestions from './Suggestions';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

   const [searchParams] = useSearchParams();
   console.log(searchParams.get("v"));

    const dispatch = useDispatch()

    useEffect(() => {
    dispatch( closeMenu() )
    },[]);
    
    useEffect(() => {
      getVideos();
      },[]);
 

    const [videos, setVideos] = useState([]);

   const getVideos = async () =>{
    const data = await fetch(Youtube_video_api);
    const json = await data.json();
    setVideos(json.items);
   }

  return (
    <div className='col-span-9'>
    <div className='flex flex-wrap'>
    <div className='ml-4'>
      <iframe width="900" height="500" 
    src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
     title="YouTube video player"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen>
        </iframe>

        <div className='w-[56rem] mt-[1rem] py-2 px-2 bg-gray-300'>

          <CommentsContainer/>

        </div>

        </div>
        <div className='col-span-4'>
        {videos.map(videos => (
          <Link to={"/watch?v="+videos.id}><Suggestions key={videos.id} info = {videos}/></Link>))}
        </div>
        </div>
        </div>
  )
}

export default WatchPage

