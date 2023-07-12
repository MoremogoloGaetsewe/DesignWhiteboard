import React from 'react'
import Participant from './Participant';

function PartcipantCard( {micControl, onlineUsers}){

 

    return(
        <div className="participants-container"><div className="Chat-Participants-Headings-container" >
        <h3 className='Chat-Participants-Headings'>Participants</h3>
        </div><div className='Participants-items'>
            <Participant micControl={micControl}/>
        <Participant micControl={micControl}/>
        
        </div><h4> view all Participants</h4></div>)
}

export default PartcipantCard;