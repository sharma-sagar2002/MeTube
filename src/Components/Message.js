import React from 'react'

const Message = ({name , chat}) => {
  return (
    <div className='flex my-2'>
        <img className="h-7 w-7" alt="user image" src="https://cdn.iconscout.com/icon/free/png-256/free-user-1374-433878.png"/>
        <div className='flex '>
            <span className='mx-2 font-bold '>{name}</span>
            <span className='flex flex-wrap'>{chat}</span>
        </div>
    </div>
  )
}

export default Message