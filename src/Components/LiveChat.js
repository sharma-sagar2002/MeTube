import React, { useEffect, useState } from 'react'
import Message from './Message'
import { generateName, makeChat } from '../utils/helper'
import { chatLen } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
const LiveChat = () => {
const [customMessage,setCustomMessage]=useState("");
const dispatch=useDispatch();
const chatMessages=useSelector((store)=>(store.chat.messages));
useEffect(()=>{
 const i=setInterval(()=>{
    //api polling
    console.log("api polling");
    dispatch(addMessage({
        name: generateName(),
        chat: makeChat(chatLen),
    }))

 },1500);
 return ()=>{
    clearInterval(i);
 }
},[]);

  return (
    <div>
     <div className=" h-[400px] px-4 py-2 bg-red-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
       {
           chatMessages.map((ele)=>(
             <Message name={ele.name} chat={ele.chat}/>
            ))
       }
     </div>
     
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"Sagar Sharma",
                chat:customMessage,
            }))
            setCustomMessage("");
        }} className='my-1'>
            <input value={customMessage} onChange={(e)=>{setCustomMessage(e.target.value)}}  className='border border-black py-1 px-2 w-80 rounded-lg' type='text'></input>
            <button className=' ml-1 w-20 bg-red-100 rounded-lg py-1 ' type='submit'>Send</button>
        </form>
    
    </div>
    
  )
}

export default LiveChat