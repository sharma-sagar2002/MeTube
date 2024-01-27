import { Link } from "react-router-dom";

const VideoCard= (props)=>{
    const itemList=props.info;
    const {snippet,statistics}=itemList;
    const {channelTitle, thumbnails}=snippet;
return  (
   <div className=" m-3">
          <img  alt="videocard" className="rounded-lg cursor-pointer" src={thumbnails.medium.url} />
          
          <h1 className=" w-60 font-medium" >{snippet.title}</h1>
          <h2 className=" w-60">{channelTitle}</h2>
          <h2>{statistics.viewCount} views</h2>
         
         
    </div>
)
};

export default VideoCard;