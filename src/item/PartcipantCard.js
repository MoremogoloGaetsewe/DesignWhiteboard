import React from 'react'
import Participant from './Participant';

function PartcipantCard( {micControl, onlineUsers}){

 

    return(
        <div className="participants-container"><div className="Chat-Participants-Headings-container" >
        <h3 className='Chat-Participants-Headings'>Participants</h3>
        </div><div className='Participants-items'>
        {Object.entries(onlineUsers).map(([key, value]) => 
        (
            <Participant micControl={micControl} userId={key} userName={value}/>
        ))}
            
        
        </div><h4> view all Participants</h4></div>)
}

export default PartcipantCard;