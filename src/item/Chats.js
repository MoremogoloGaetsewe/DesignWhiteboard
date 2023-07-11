import React from 'react'

function Chats(){


    return(<div><div className='chat'>
        <div  className='Participant-container'>
            <div className='classMemberIcon-container'>
                <div className='classMemberIcon-circle'></div>
            </div>
            <p className='test'>&nbsp; Moremogolo Gaetsewe&nbsp; </p>
        </div>

            <div className='current-user-chatBubble'><p className='chat-text-current-user'>Hello im More</p></div>
        </div>
        
        <div className='chat'>
        <div  className='Participant-container-other'>
           
            <p className='test'>&nbsp; Lebone Gaetsewe&nbsp; </p>
            <div className='classMemberIcon-container'>
                <div className='classMemberIcon-circle'></div>
            </div>
        </div>

            <div className='other-user-chatBubble'><p className='chat-text-other-user'>Hello More, im Lebone</p></div>
        </div>
        </div>)
}

export default Chats;