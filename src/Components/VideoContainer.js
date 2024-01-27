import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer=()=>{
  const [videosList, setVideosList]=useState([]);
    useEffect(()=>{
        getVideos();
    },[]);
  const getVideos= async ()=>{
       const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+API_KEY);
       const json =await data.json();
       setVideosList(json.items);
       
    };
   
return  (
    <div className="flex flex-wrap my-2 ">
        {
            videosList.map((video)=>(
             <Link key={video.id} to={"watch/?v="+video.id}> <VideoCard  info={video}/></Link>
            ))
        }
        
    </div>
)
};

export default VideoContainer;