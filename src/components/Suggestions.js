import React from 'react'


const Suggestions = (items) => {


    const {snippet} = items.info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
        <div className=' flex  ml-4 mb-4 w-96 h-30  transform transition-transform hover:scale-105 hover:shadow-lg'>
  
        <div className='w-5/6 '>
        <img className='mt-1 w-full rounded-lg' alt='thumbnail' src={thumbnails.high.url}/>
        </div>

        <div className='w-5/6 px-2 py-2'>

          <ul className='justify-start'>
          <li className='font-bold text-sm'>{title}</li>
            <li className='font-weight-400 text-xs pt-2'>{channelTitle}</li>
          </ul>
        </div>
    
    </div>
  )
}

export default Suggestions