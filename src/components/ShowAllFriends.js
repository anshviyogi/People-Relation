import React,{useState} from 'react'
import './ShowAllFriends.css'

const ShowAllFriends = () => {
    const friends = JSON.parse(localStorage.getItem("data"))
  return (
    <div className="showAllFriends">
        
        {friends.map(friendsList =>{
            console.log(friendsList)
            return(
                <>
                <div className="friendList-info">
                    
                 <h3 >{friendsList.name} is a friend of {friendsList.friend}</h3>
                 </div>
            <br></br>
                </>
            )
        })}
    </div>
  )
}

export default ShowAllFriends