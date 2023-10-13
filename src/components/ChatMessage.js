import React, { useEffect, useState } from 'react'
import LiveChats from './LiveChats'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeId } from '../utils/helper'

const ChatMessage = () => {

    const dispatch = useDispatch();

    const [messageText, setMessageText] = useState();

    const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(()=>{

        const i = setInterval(()=>{
            dispatch(
                addMessage({
                name: generateRandomName(),
                message: makeId(50)
              })
            );

        }, 1500);


        return () => clearInterval(i);

    },[])

  return (
    <div>
    <div className='w-[56rem] border border-black mt-3 h-[600px] p-8 rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
          {chatMessages.map((c,i) => <LiveChats
           name={c.name}
           key={i}
            message= {c.message} />
            )}
        </div>

         <form className='w-[56rem] border border-black mt-1 mb-2 h-[4rem]'
         onSubmit={(e)=>{
          e.preventDefault();

          dispatch(addMessage({
            name: "kanhaiya pandey",
            message: messageText,
          }))
         }}>
            <input className='h-[3.5rem] w-[50rem] p-3' type='text' placeholder='message'
            value = {messageText} onChange={(e) => {setMessageText(e.target.value)}}
            />
            <button className=' h-full w-[5.9rem] bg-green-300 border border-black'>send</button>
         </form>

        </div>
  )
}

export default ChatMessage