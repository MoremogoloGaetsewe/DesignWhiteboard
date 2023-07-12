import React, {useState} from 'react'
import Chats from './Chats';

function MessagesCard( {messages, sessionMessages, sendMessage} ){
    const [message, setMessage] = useState('');
    
    
console.log('MessageCard', sessionMessages)
    return(
        <div className="messages-container">
            <div className='Chat-Participants-Headings-container'>
                <h3  className='Chat-Participants-Headings'>Chats</h3>
                </div>
                <div className='Chat-items'>
           
                  
                    {sessionMessages.length>0?(
                    sessionMessages.map((msgObject)=>{
                        return <Chats msgObject={msgObject}/>
                    })):(<div>No messages</div>)}
           </div>
            <div className="chat-message-field-container">
    <input className="chat-message-field" type="text" value={message} placeholder="Type your message..." onChange={(e)=>setMessage(e.target.value)} />
    <button className='chat-send-button' onClick={()=>sendMessage(message)} >Send</button>
  </div>
            </div>)
}

export default MessagesCard;