const ButtonList=()=>{
  const btnList=["All", "Education", "Live", "Comedy", "Body Building", "Movies", "Anime","Gaming","History", "Facts", "Motivation"];
  
  return  (
    

    
    <div className="flex ">
      {
        btnList.map((btn)=>(
          <button  key={btn} className="border border-gray-200  bg-gray-200 mx-2 py-1 px-3 rounded-lg " >{btn}</button>
        ))
      }
      
    </div>
    
  )
};

export default ButtonList;