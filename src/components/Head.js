import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Search_api } from '../utils/constant';
import { cacheResult } from '../utils/searchSlice';

const Head = () => {

  const [search, setSearch] = useState("");

  const [Suggestions, setSuggestions]=useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
 


// make an api call in every key press.
  // but if the diff between to api calls is <200ms then decline that api call.


  useEffect(()=>{

    const timer = setTimeout(() =>{
        if(searchCache[search]){
          setSuggestions(searchCache[search]);
        } else{
           getSearchSuggestions()
     }
   } , 250) ;

    return () => {
      clearTimeout(timer);
    }
   
  },[search]);

  const getSearchSuggestions = async ()=> {
       console.log(search);
        const data = await fetch(Search_api + search);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);

        // dispatch cache

        dispatch(cacheResult({
          [search]: json[1],
        })
      )
  }


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
     <div className='col-span-10'>
            <input className='mt-4 w-1/2 ml-32 p-2 pl-4 border border-gray-300 rounded-l-full focus:outline-none'
             type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
            />
                <button className='p-2 pl-4 pr-6 bg-gray-100 border border-gray-400 rounded-r-full hover:bg-red-600'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

       {showSuggestions && ( <div className='fixed w-[34rem] bg-white ml-[9rem] rounded-lg shadow-lg'>
          <ul>
            {Suggestions.map(s=> <li key={s} className='hover:bg-gray-300 p-2 cursor-pointer'><i className="fa-solid fa-magnifying-glass fa-xs"></i>&nbsp;&nbsp; {s}</li>)}
          </ul>
        </div>)}

        </div>

        <div className='col-span-1'>
            <img className='h-6 mt-6' alt='user' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
        </div>
    </div>
  )
}

export default Head