import React from 'react'
import Chats from './Chats';

function MessagesCard(){


    return(
        <div className="messages-container">
            <div className='Chat-Participants-Headings-container'>
                <h3  className='Chat-Participants-Headings'>Chats</h3>
                </div>
                <div className='Chat-items'>
            <Chats/></div>
            <div className="chat-message-field-container">
    <input className="chat-message-field" type="text" placeholder="Type your message..." />
    <button className='chat-send-button'>Send</button>
  </div>
            </div>)
}

export default MessagesCard;