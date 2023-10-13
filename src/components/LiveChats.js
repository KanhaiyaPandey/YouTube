import React from 'react'

const LiveChats = ({name, message}) => {
  return (
    <div className='flex pb-4'>
        <img className='h-[20px]'
         alt='user'
         src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
         <span className='px-2 font-bold shadow-sm'>{name}:</span>
         <spa>{message}</spa>
    </div>
  )
}

export default LiveChats