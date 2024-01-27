import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { API_KEY } from '../utils/constants';

const Header = () => {
    const dispatch =useDispatch();
    const [textValue,setTextValue]=useState("");
    const [suggestedItems,setSuggestedItems]=useState([]);
    const [isSearchBarFocused, setIsSearchBarFocused]=useState(false);
    
   const handleSideBar = ()=>{
         dispatch(toggleSideBar());
   };
   
   useEffect(()=>{
     
      const timer=setTimeout(()=>{
          getSuggestions();
      },200) ;
      return ()=>{
          clearTimeout(timer);
      }
   },[textValue]);

   const getSuggestions = async ()=>{
     const data=await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+textValue);
     const json=await data.json();
     setSuggestedItems(json[1]);
   }

   const handleSearch = async ()=>{
       const data=await fetch (" https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+textValue+"&key="+API_KEY);
       const json=await data.json();
       console.log(json);
   }
  return (
    <div className="grid grid-flow-col p-2 m-2 ">
         <div className="col-span-1 flex"> 
             <img onClick={()=>handleSideBar()} className="h-10 cursor-pointer" alt="Sidebar Btn" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png"/>
             <img className="h-10 mx-2 cursor-pointer" alt="Youtube icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
            
         </div>
         <div className="col-span-10 ">
              <input value={textValue} 
               onChange={(e)=>{setTextValue(e.target.value)}}
               className="border  border-gray-400 w-1/2 py-1 px-4 rounded-l-full "
               onFocus={()=>setIsSearchBarFocused(true)}
               onBlur={()=>setIsSearchBarFocused(false)}
               type="text">
              </input>

              <button  
              onClick={()=> {handleSearch()}}
               className='border border-gray-400 px-4 py-1 rounded-r-full bg-gray-100'>
                Search
              </button>
           {
            isSearchBarFocused&&(<div className=" w-[34rem] fixed bg-white my-2 p-2 rounded-md border border-gray-200">
            <ul className="px-2 cursor-default">
              { suggestedItems.map((s)=>(
                   <li className='my-1 py-1 hover:bg-gray-100 rounded-md' key={s}>🔍 {s}</li>
               ))
              }
            </ul>
         </div>)
           } 
         </div>
         <div className="col-span-1">
              <img className='h-8 cursor-pointer' alt="user image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDt6YUZ8byMEXMW-FqLnk72EfrpTC-hcBKjQ&usqp=CAU"/>
         </div>
    </div>
  )
}

export default Header;