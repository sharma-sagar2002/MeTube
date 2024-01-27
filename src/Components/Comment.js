const Comment= (props)=>{
    const {name,text,replies}=props.info;
    
    return (
       <div>

            <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-md">
               <img className="h-12 w-12 " alt="user image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&usqp=CAU"/>
               <div className="px-3">
               <h2 className="text-md font-bold ">{name}</h2>
               <p className="">{text}</p>
               </div>
            </div>
            {/* <div className="ml-5 border border-l-black">
               {
                    replies.map((comment,index)=>{
                    <Comment key={index}  info={comment}/>
                    })
                }
            </div> */}
              
        </div>
       
    )
}

export default Comment