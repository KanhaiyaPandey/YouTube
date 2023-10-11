import React from 'react'
import { useSelector } from 'react-redux';

const VideoCards = (items) => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

const {snippet, statistics} = items.info;
const {channelTitle, title, thumbnails} = snippet;

if(!isMenuOpen){
    return(
        <div className='mt-4 p-2 m-2 w-80  hover:shadow-lg'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.high.url}/>
        <ul>
            <li className='font-bold'>{title}</li>
            <li >{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
    )
}

  return (
    <div className='mt-4 p-2 m-2 w-96  hover:shadow-lg'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.high.url}/>
        <ul>
            <li className='font-bold'>{title}</li>
            <li >{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCards;