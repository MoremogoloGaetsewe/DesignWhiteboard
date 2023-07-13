import React, {useEffect, useState,useRef} from 'react';
import PartcipantCard from '../item/PartcipantCard';
import MessagesCard from '../item/MessagesCard';
import CanvasToolBar from '../item/CanvasToolBar';
import {useParams} from 'react-router-dom'
import Drawing from './Drawing'
import RoomSideBar from '../item/RoomSideBar';
import { Prev } from 'react-bootstrap/esm/PageItem';



function Room({socket, user}){

    const {roomId} = useParams();
    const [allowed, setAllowed]=useState(false);
    const [onlineUsers, setOnlineUsers]=useState({});
    const [canvasState, setCanvasState]=useState({});
    const [ready, setReady]=useState(false);
    const [messages, setMessages]=useState({});
  const [sessionMessages, setSessionMessages] = useState([]);
    useEffect(()=>{
        socket.emit('accessRequest',roomId)
        console.log('usee')
        const accessResponse = () =>{

            setAllowed(true)
            socket.emit('JoinRoom', roomId)
            console.log('join');
            
        }

        const activeUsersReq = (onlineUsers) =>{
            
                console.log(onlineUsers)
                console.log('received users');
                if(onlineUsers){
                setOnlineUsers(onlineUsers)
                }
          
        }

        const canvasStateRes = (canvasState)=>{
         

          setCanvasState(canvasState)
        
          }

        const connect = () => {
            console.log('Connected to server');
            socket.emit('canvasStateReq', roomId)
            socket.emit('activeUsersReq', roomId)
            socket.emit('JoinRoom', roomId)
          
          }


          const ResMessages=(Rmessages)=>{
            console.log('hereabd', Rmessages)
            setMessages(Rmessages)

          }

          const ReceicedMessage = (message , UserName, userId)=>{
            console.log('here', message)
          
            
                  
                  setSessionMessages((prevMessages)=>
                   
                     [...prevMessages, {[userId]:{[UserName]:message}}]
                  )
          }
     

          
    const loadRoomData= (msg) => {
        setReady(true)
    }
        socket.on('accessResponse',accessResponse)

     

          socket.on('connect', connect);

          socket.on('canvasStateRes',canvasStateRes)

          socket.on('loadRoomData',loadRoomData);
          socket.on('activeUsersRes', activeUsersReq)
          socket.on('ResMessages', ResMessages)

          socket.on('sendMessage', ReceicedMessage)
          
        return () =>{
            socket.off('accessResponse',accessResponse)
            socket.off('activeUsersRes', activeUsersReq)
            socket.off('connect', connect);
            socket.off('canvasStateRes',canvasStateRes)
            socket.off('loadRoomData',loadRoomData);
            socket.on('ResMessages', ResMessages)
            socket.off('sendMessage', ReceicedMessage);

        } 
    },[])

    useEffect(() => {
      console.log('atfer',sessionMessages)
        const handleBeforeUnload = (event) => {
          event.preventDefault();
          // Display a confirmation dialog
          event.returnValue = 'do you want to leave room'; // Modern browsers require a non-empty string
        };
    
        
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, [sessionMessages, messages, onlineUsers]);

      function sendMessage(message)
      {
        console.log("sent")
        socket.emit('sendMessage', message, roomId, user.uid)
      }

   
      function micControl(userId){

      }

return (
    <div className='container'>
        <RoomSideBar />
    <div className="canvas-content">
      
      
        <Drawing socket={socket} roomId={roomId} canvasState1={canvasState} />
        
        <div className='left-room-container'>
            <PartcipantCard onlineUsers={onlineUsers} micControl={micControl}/>
            <MessagesCard messages={messages} sessionMessages={sessionMessages} sendMessage={sendMessage} user={user} />
        </div>
    </div>
    </div>
)

}

export default Room;
