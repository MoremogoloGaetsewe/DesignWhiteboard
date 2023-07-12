import React from 'react'

function Chats({msgObject}){


    return(<div>
        {Object.entries(msgObject).map(([key, value]) => (
        <div className='chat'>
        <div  className='Participant-container'>
            <div className='classMemberIcon-container'>
                <div className='classMemberIcon-circle'></div>
            </div>
            <p className='test'>&nbsp;{key}&nbsp; </p>
        </div>

            <div className='current-user-chatBubble'><p className='chat-text-current-user'>{value}</p></div>
        </div>
        
        ))}
        </div>)
}

export default Chats;