import React from 'react'
import Participant from './Participant';

function PartcipantCard(){

 

    return(
        <div className="participants-container"><div className="Chat-Participants-Headings-container" >
        <h3 className='Chat-Participants-Headings'>Participants</h3>
        </div><div className='Participants-items'><Participant/>
        <Participant/></div><h4> view all Participants</h4></div>)
}

export default PartcipantCard;