import { useState } from "react";
import { useSelector } from "react-redux";

const SideContainer=()=>{
    
  const sideBarFlag=useSelector((store)=> store.app.isSideBarOpen);
  
  if(!sideBarFlag) return null;
     return  (
        <div className="px-4 ">
            <div className="my-2 " >
                <h1 className="font-bold font-mono text-lg ">You</h1>
                <ul>
                    <li>Your Videos</li>
                    <li>Watch Later</li>
                    <li>Liked Videos</li>
                </ul>
            </div>
            <div  className="my-2">
                <h1 className="font-bold font-mono text-lg">Subscriptions</h1>
                <ul>
                    <li>MrBeast</li>
                    <li>Abhishek Yadav</li>
                    <li>TakeYouForward</li>
                    <li>Mo Vlogs</li>
                </ul>
            </div>
            <div  className="my-2">
                <h1 className="font-bold font-mono text-lg">Explore</h1>
                <ul>
                    <li>Trending</li>
                    <li>Shopping</li>
                    <li>Movies</li>
                    <li>Live</li>
                    <li>News</li>
                    <li>Gaming</li>
                    <li>Sports</li>
                </ul>
            </div>
        </div>
    )
};
export default SideContainer;