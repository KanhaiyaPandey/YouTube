import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

     if(!isMenuOpen){
        return(
            <div className='w-1 p-2 col-span-2'>
            <ul>
                <li className=' mb-2'><i className="fa-solid fa-house fa-xl" ></i></li>
              
                <li className='mt-16 mb-2'><i className="fa-solid fa-bolt fa-xl"></i></li>
  
                <li className='mt-16 mb-2'><i className="fa-sharp fa-solid fa-heart fa-xl"></i></li>
          
                <li className='mt-16 mb-2'><i className="fa-solid fa-book fa-xl"></i></li>
            
            </ul>
            </div>
          
        )
    }
    
  return (
    <div className='col-span-3 p-2'>
        <h1 className='font-bold text-md mb-6'><i className="fa-solid fa-house" ></i> &nbsp;&nbsp; Home</h1>
        <h1 className='font-bold text-md mb-6 '><i className="fa-solid fa-bolt"></i> &nbsp;&nbsp; Shorts</h1>
        <h1 className='font-bold text-md mb-6 '><i className="fa-sharp fa-solid fa-heart"></i> &nbsp;&nbsp; Subscriptions</h1>
        <hr className='border-t-1 border-black mt-8 mb-6'/>

        <h1 className='font-bold text-md mb-6'><i className="fa-solid fa-book"></i> &nbsp;&nbsp; Library</h1>
        <h1 className='font-bold text-md mb-6'><i className="fa-solid fa-clock-rotate-left"></i> &nbsp;&nbsp; History</h1>
        <h1 className='font-bold text-md mb-6'><i className="fa-regular fa-circle-play"></i> &nbsp;&nbsp; Your Videos</h1>
        <h1 className='font-bold text-md mb-6'><i className="fa-solid fa-clock"></i> &nbsp;&nbsp; Watch Later</h1>
        <h1 className='font-bold text-md mb-6'><i className="fa-regular fa-thumbs-up"></i> &nbsp;&nbsp; Liked Videos</h1>
        <hr className='border-t-1 border-black mt-8 mb-6'/>

        <h1 className='font-bold text-lg'>Explore</h1>

        <h1 className='font-bold text-md mt-6'><i className="fa-solid fa-fire-flame-curved"></i> &nbsp;&nbsp; Trending</h1>
        <h1 className='font-bold text-md mt-6'><i className="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp; Shoping</h1>
        <h1 className='font-bold text-md mt-6'><i className="fa-solid fa-music"></i> &nbsp;&nbsp; Music</h1>
        <h1 className='font-bold text-md mt-6'><i className="fa-solid fa-film"></i> &nbsp;&nbsp; Film</h1>
        <h1 className='font-bold text-md mt-6 mb-4'><i className="fa-solid fa-gamepad"></i> &nbsp;&nbsp; Gaming</h1>
    </div>
  )
}

export default Sidebar