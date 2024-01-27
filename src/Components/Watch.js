import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
const Watch = ()=>{
    const dispatch =useDispatch();
    useEffect(()=>{
       dispatch(closeSideBar());
    },[]);
    const [searchParams] = useSearchParams();
    const id=searchParams.get("v");
  return  (
    <div className="w-full">
      <div className="flex">
      <div className="mx-3 p-2 my-2">
         <iFrame className="rounded-md" width="800" height="400" src={"https://www.youtube.com/embed/"+id}
         title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iFrame>
      </div>
      <div className="p-2 my-2 w-full">
      <LiveChat/>
      </div>
      
     </div>
      
      
      <CommentsContainer/>
     
     

    </div>
   
   
  )
};
export default Watch;