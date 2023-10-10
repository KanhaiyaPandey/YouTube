import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'

const Head = () => {

     const dispatch = useDispatch()

    const toggleMenuHandler =  () => {
        dispatch(toggleMenu())
    };

  return (
    <div className='grid grid-flow-col'>


        <div className='flex col-span-1'>

         <img 
        onClick={() => toggleMenuHandler()}

         className='h-8 mt-4 pl-1 cursor-pointer' alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'/>

      <a href='/'>

            <img className='h-20 ml-4 mt-1 pb-6 cursor-pointer' alt='logo' src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'/>

            </a>

        </div>

     <div className='col-span-10'>
            <input className='mt-4 w-1/2 ml-32 p-2 border border-gray-300 rounded-l-full focus:outline-none' type='text'/>
                <button className='p-2 pl-4 pr-6 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-red-600'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div className='col-span-1'>
            <img className='h-6 mt-6' alt='user' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
        </div>
    </div>
  )
}

export default Head