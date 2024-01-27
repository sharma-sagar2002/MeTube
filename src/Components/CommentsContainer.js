import React from 'react'
import Comment from "../Components/Comment";
const CommentsContainer = () => {

    const commentList = [
        {
            name : "Sagar Sharma",
            text: "lorem ipsum dollar",
            replies : [
                {
                   name :"Parth Sharma",
                   text: "lorem ipsum dollar",
                   replies:[],
                },
                {
                   name :"Ram Kumar Sharma",
                   text:"dollar lorem ipsum",
                   replies: [
                    {
                        name :"Sagar Sharma",
                        text: "lorem ipsum dollar",
                        replies:[],
                    },
                    {
                        name :"Sagar Sharma",
                        text: "lorem ipsum dollar",
                        replies:[],
                    },
                  ]
                }
            ]
        },
        {
             name:"Shyam",
             text:"Hello Sagar",
             replies:[],
        },
        {
            name :"Vasu",
            text: "lorem ipsum dollar",
            replies:[],
        },
    ];
  return (
    <div className="my-1 mx-4 px-4">
          <h1 className=" font-bold text-xl" >Comments :</h1>
          <div>
          {
            commentList.map((comment,index)=>(
                <div>
                  <Comment  key={index} info={comment}/>
                  <div className=" ml-10 pl-5 ">
                  {
                       comment.replies.map((comment,index) => (
                          <Comment key={index} className="border border-l-black"  info={comment}/>
                      ))
                  }
                </div> 
          </div> 
              ))
          }
         
         </div>
         
           
      </div>
  )
}

export default CommentsContainer

   
                