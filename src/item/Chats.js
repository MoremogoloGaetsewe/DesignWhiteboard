import React from 'react'

function Chats({msgObject, userId}){


    return(<div>
        {Object.entries(msgObject).map(([key, value]) => (
            Object.entries(value).map(([userName,message])=>(
                userId===key?(        <div className='chat'>
                <div  className='Participant-container-current'>
                    <div className='classMemberIcon-container'>
                        <div className='classMemberIcon-circle'></div>
                    </div>
                    <p className='test'>&nbsp;{userName}&nbsp; </p>
                </div>
        
                    <div className='current-user-chatBubble'><p className='chat-text-current-user'>{message}</p></div>
                </div>):(
                    <div className='chat'>
                    <div  className='Participant-container-other'>
                       
                        <p className='test'>&nbsp;{userName}&nbsp; </p>
                        <div className='classMemberIcon-container'>
                            <div className='classMemberIcon-circle'></div>
                        </div>
                    </div>
            
                        <div className='other-user-chatBubble'><p className='chat-text-other-user'>{userName}</p></div>
                    </div>
            
                )
        
                
            ))
    
        ))}
        </div>)
}

export default Chats;