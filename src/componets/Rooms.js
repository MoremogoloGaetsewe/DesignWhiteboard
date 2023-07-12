import React,{useEffect} from 'react'
import ClassCard from '../item/ClassCard';
import EmptyCard from '../item/EmptyCard';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Rooms({socket}){

  const [rooms, setRooms]=useState({})
  const navigate = useNavigate();

  useEffect(()=>{
      const handleConnect = () => {
          socket.emit('requestRoomsNames')
          console.log('Connected to serverhjdh');
        }
        const handleRoomData =(roomData)=>{
          console.log(roomData)
          setRooms(roomData)
        }
        const handleReconnect = (attemptNumber) => {
  
          console.log(`Reconnected to server (attempt ${attemptNumber})`);
          // Perform any necessary actions after reconnecting
        }
      console.log('uhuhd')
      socket.emit('requestRoomsNames')
      //socket.on('reconnect', handleReconnect )
  
        socket.on('connect', handleConnect);
        socket.on('roomsNamesResponse',handleRoomData)
  
        
       
      return()=>(
          socket.off('roomsNamesResponse',handleRoomData),
          socket.off('connect', handleConnect)
          //socket.off('reconnect', handleReconnect )
      )  
  
  },[])
  


    return(
     
<div className='content'>
<form className="search-form">
        <input className="search" type="search" placeholder="Search for Class.." />
      </form>
      <div className="rooms-container">
   
    <EmptyCard/>

    {Object.entries(rooms).map(([key, value]) => (

      <ClassCard id={key} name={value['name']}/>
                
            ))}

    </div>
   
 </div>
    )


}

export default Rooms;